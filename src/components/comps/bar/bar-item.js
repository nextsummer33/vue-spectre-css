import BarBtn from './bar-btn';
import { boolType, strType, numStrType } from '@/utils/proptypes';
import { debounce } from '@/utils/helper';
import { tooltipData } from '@/mixins';
import { memoize } from '@/utils/memoize';
import { mergeData } from 'vue-functional-data-merge';

const cprops = memoize(() => ({
  value: numStrType('0'),
  tag: strType('div'),
  min: strType('0'),
  max: strType('100'),
  step: strType('1'),
  bgColor: strType(),
  slider: boolType(),
  nolabel: boolType(),
  notip: boolType(),
  lazy: boolType()
}));

export default {
  inject: {
    parentProps: {
      from: 'parentProps',
      default: () => ({
        min: null,
        max: null,
        step: null,
        slider: false,
        bgColor: null,
        nolabel: false,
        notip: false,
        lazy: false
      })
    }
  },
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  data() {
    return { v: parseInt(this.value, 10) };
  },
  watch: {
    value(v) {
      this.v = parseInt(v, 10);
    }
  },
  methods: {
    slideBegin(beginEv, touch) {
      const self = this,
        ox = beginEv.target.getClientRects()[0].x,
        ow = this.$el.clientWidth,
        pw = this.$parent.$el.clientWidth,
        cb = debounce(_ => self.$emit('input', self.v), 100);

      self._slideMove = ev => {
        const cx = (touch ? ev.changedTouches.item(0) : ev).clientX;
        self.slideMove(pw, ow, ox, cx, cb);
      };

      self._slideEnd = _ => self.slideEnd();

      const addEvent = document.addEventListener,
        moveFn = ev => addEvent(ev, this._slideMove),
        endFn = ev => addEvent(ev, this._slideEnd);
      ['touchmove', 'mousemove'].forEach(moveFn);
      ['touchend', 'touchcancel', 'mouseup', 'mousecancel'].forEach(endFn);
    },
    slideMove(pw, ow, ox, cx, cb) {
      const min = parseInt(this.parentProps.min || this.min),
        max = parseInt(this.parentProps.max || this.max),
        step = parseInt(this.parentProps.step || this.step);
      let p = (ow + cx - ox) / pw,
        v = Math.round((max - min) * (p < 0 ? 0 : p > 1 ? 1 : p));
      v = v - (v % step);
      if (v !== this.v) {
        this.v = v;
        !this.lazy && cb();
      }
    },
    slideEnd() {
      const removeEvent = document.removeEventListener,
        moveFn = ev => removeEvent(ev, this._slideMove),
        endFn = ev => removeEvent(ev, this._slideEnd);
      ['touchmove', 'mousemove'].forEach(moveFn);
      ['touchend', 'touchcancel', 'mouseup', 'mousecancel'].forEach(endFn);
      this._slideMove = this._slideEnd = undefined;
      this.lazy && this.$emit('input', this.v);
    }
  },
  render(h) {
    const self = this,
      parentProps = self.parentProps,
      min = parseInt(parentProps.min || self.min),
      max = parseInt(parentProps.max || self.max);
    let vdata = {
      staticClass: 'bar-item',
      attrs: {
        role: 'progessbar',
        'aria-valuenow': self.v,
        'aria-valuemin': min,
        'aria-valuemax': max
      },
      style: {
        width: (self.v * 100) / (max - min) + '%',
        background: parentProps.bgColor || self.bgColor
      }
    };

    let els = [];
    const noTooltip = parentProps.notip || self.notip,
      percentage = Math.floor((self.v * 100) / (max - min)) + '%',
      tooltip = noTooltip ? {} : tooltipData({ tooltip: percentage });

    if (parentProps.slider || self.slider) {
      const on = {
        mousedown: ev => self.slideBegin(ev),
        touchstart: ev => self.slideBegin(ev, true)
      };
      els = [h(BarBtn, mergeData({ on }, tooltip))];
    } else {
      vdata = !noTooltip ? mergeData(vdata, tooltip) : vdata;
      els = self.nolabel ? undefined : percentage;
    }

    return h(self.tag, vdata, els);
  }
};

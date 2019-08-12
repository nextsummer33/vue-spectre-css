import BarItem from './bar-item';
import memoize from '@/utils/memoize';
import { boolType, strType, numStrArrType } from '@/utils/proptypes';
import { isStr, isObj, isNum } from '@/utils/object';

const cprops = memoize(() => ({
  value: numStrArrType('0'),
  tag: strType('div'),
  min: strType('0'),
  max: strType('100'),
  step: strType('1'),
  bgColor: strType(),
  slider: boolType(),
  nolabel: boolType(),
  notip: boolType(),
  lazy: boolType(),
  range: boolType(),
  sm: boolType()
}));

export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  provide() {
    const o = {};
    Object.defineProperties(o, {
      min: { enumerable: true, get: _ => this.min },
      max: { enumerable: true, get: _ => this.max },
      step: { enumerable: true, get: _ => this.step },
      nolabel: { enumerable: true, get: _ => this.nolabel },
      notip: { enumerable: true, get: _ => this.notip },
      slider: { enumerable: true, get: _ => this.slider },
      bgColor: { enumerable: true, get: _ => this.bgColor }
    });
    return { parentProps: o };
  },
  data() {
    return {
      v1: this.min,
      v2: this.max
    };
  },
  mounted() {
    this.updateVal(this.value);
  },
  watch: {
    value(v) {
      this.updateVal(v);
    }
  },
  methods: {
    updateVal(val) {
      if (this.range) {
        const isArr = isObj(val);
        this.v1 = isArr ? val[0] + '' || this.min : this.min;
        this.v2 = isArr ? val[1] + '' || this.max : this.max;
      } else if (isNum(val) || isStr(val)) {
        this.v1 = val + '' || this.min;
      }
    },
    onInput(v, left = true) {
      let v1 = left ? Math.min(v, this.max) + '' : this.v1,
        v2 = left ? this.v2 : Math.max(v, this.min) + '';

      if (left) {
        this.v1 = v1;
        this.v2 = parseInt(v2) < parseInt(v1) ? v1 : v2;
      } else {
        this.v2 = v2;
        this.v1 = parseInt(v1) > parseInt(v2) ? v2 : v1;
      }

      this.$emit('change', this.range ? [this.v1, this.v2] : this.v1);
    }
  },
  render(h) {
    const self = this,
      vdata = { staticClass: 'bar', class: [] };

    self.sm && vdata.class.push('bar-sm');
    self.slider && vdata.class.push('bar-slider');

    let children = this.$slots.default;

    if (!children) {
      const mkBarItem = (value, left = true) =>
        h(BarItem, {
          props: { value },
          on: { input: ev => self.onInput(ev, left) }
        });
      children = [mkBarItem(self.v1)];
      self.range && children.push(mkBarItem(self.v2, false));
    }
    return h(self.tag, vdata, children);
  }
};

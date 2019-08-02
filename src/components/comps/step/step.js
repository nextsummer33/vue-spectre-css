import { strType, arrType, numType } from '@/utils/proptypes';
import StepItem from './step-item';
import memoize from '@/utils/memoize';

const cprops = memoize(() => ({
  tag: strType('ul'),
  items: arrType(),
  value: numType()
}));

export default {
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change'
  },
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  data: () => ({
    current: 0
  }),
  watch: {
    value(v) {
      this.current = v;
    }
  },
  render(h) {
    const vm = this;
    const itemEl = ({ tooltip, text }, i) => {
      const click = ev => {
        ev.preventDefault();
        vm.current = i;
        vm.$emit('change', i);
      };
      const itemData = {
        on: { click },
        attrs: { active: vm.current === i, tooltip }
      };
      return h(StepItem, itemData, text);
    };

    const ch = vm.$slots.default || vm.items.map(itemEl);
    return h(this.tag, { staticClass: 'step' }, ch);
  }
};

import { strType, arrType, numType } from '@/utils/proptypes';
import StepItem from './step-item';

export default {
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    tag: strType('ul'),
    items: arrType(),
    value: numType()
  },
  data() {
    return {
      current: 0
    };
  },
  watch: {
    value(v) {
      this.current = v;
    }
  },
  methods: {
    onSelect(v) {
      this.current = v;
      this.$emit('change', v);
    }
  },
  render(h) {
    const vm = this;
    const itemEl = ({ tooltip, text }, idx) => {
      return h(
        StepItem,
        {
          on: { click: _ => vm.onSelect(idx) },
          attrs: { active: vm.current === idx, tooltip }
        },
        text
      );
    };
    const ch = vm.$slots.default ? [vm.$slots.default] : vm.items.map(itemEl);
    return h(this.tag, { staticClass: 'step' }, ch);
  }
};

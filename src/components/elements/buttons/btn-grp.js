import { strType, boolType, arrType, numType } from '@/utils/proptypes';
import Btn from './btn';

export default {
  name: 'SBtnGrp',
  props: {
    tag: strType('div'),
    block: boolType(),
    primary: boolType(),
    sm: boolType(),
    lg: boolType(),
    items: arrType(),
    value: numType(-1)
  },
  data() {
    return {
      sel: this.value
    };
  },
  methods: {
    select(i) {
      if (this.sel !== i) {
        this.sel = i;
        this.$emit('input', i);
      }
    }
  },
  watch: {
    value(v) {
      this.sel = v;
    }
  },
  render(h) {
    const vm = this;
    return h(
      vm.tag,
      {
        staticClass: 'btn-group',
        class: { 'btn-group-block': vm.block },
        attrs: { role: 'group' }
      },
      vm.$slots.default ||
        vm.items.map((t, i) => {
          return h(
            Btn,
            {
              props: {
                active: i === vm.sel,
                sm: vm.sm,
                lg: vm.lg,
                primary: vm.primary
              },
              on: { click: () => vm.select(i) }
            },
            t
          );
        })
    );
  }
};

import { strType, boolType, arrType, numType } from '@/utils/proptypes';
import Btn from './btn';

export default {
  name: 'SBtnGrp',
  props: {
    tag: strType('div'),
    block: boolType(false),
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
              props: { active: i === vm.sel },
              on: { click: () => vm.select(i) }
            },
            t
          );
        })
    );
  }
};

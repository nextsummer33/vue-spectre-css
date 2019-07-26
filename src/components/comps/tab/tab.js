import { boolType, arrType, strType, numType } from '@/utils/proptypes';
import TabItem from './tab-item';

export default {
  inheritAttrs: false,
  model: {
    props: 'value',
    event: 'select'
  },
  props: {
    tag: strType('ul'),
    items: arrType(),
    block: boolType(),
    value: numType(0)
  },
  watch: {
    value(v) {
      this.selected = v;
    }
  },
  data() {
    return {
      selected: this.value
    };
  },
  render(h) {
    const vdata = {
      staticClass: this.block ? 'tab tab-block' : 'tab'
    };

    if (this.$slots.default) {
      return h(this.tag, vdata, this.$slots.default);
    }

    const vm = this;

    return h(
      this.tag,
      vdata,
      vm.items.map((item, idx) =>
        h(
          TabItem,
          {
            props: { tag: item.tag },
            attrs: {
              target: item.target,
              badge: item.badge,
              active: vm.selected === idx
            },
            on: {
              click(ev) {
                vm.selected = idx;
                vm.$emit('select', idx);
              }
            }
          },
          item.tab
        )
      )
    );
  }
};

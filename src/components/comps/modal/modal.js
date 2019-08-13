import { strType, boolType } from '@/utils/proptypes';
import { mergeData } from 'vue-functional-data-merge';
import { Active, activeData } from '@/mixins';
import Container from './modal-container';
import Overlay from './modal-overlay';
import { getModal } from '@/utils/get-var';
import memoize from '@/utils/memoize';

const cprops = memoize(() => {
  return getModal().sizes.reduce((o, v) => (o[v] = boolType()) && o, {
    tag: strType('div'),
    title: strType(),
    persistent: boolType()
  });
});

export default {
  mixins: [Active],
  model: {
    prop: 'active',
    event: 'dismiss'
  },
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  data() {
    return {
      show: this.value
    };
  },
  watch: {
    active(v) {
      this.show = v;
    }
  },
  methods: {
    onDismiss() {
      this.show = false;
      this.$emit('dismiss', this.show);
    }
  },
  render(h) {
    const vm = this;
    const click = this.persistent ? _ => {} : _ => vm.onDismiss();
    const cls = getModal().sizes.reduce((arr, v) => {
      vm[v] && arr.push('modal-' + v);
      return arr;
    }, []);
    const vdata = mergeData(this.$data, activeData(vm.$props), {
      staticClass: 'modal',
      class: cls
    });
    const container = h(Container, [vm.$slots.default]);
    const overlay = h(Overlay, { on: { click } }, undefined);
    return h(vm.tag, vdata, [overlay, container]);
  }
};

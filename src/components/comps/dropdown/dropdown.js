import { strType, boolType } from '@/utils/proptypes';
import { Active, activeData } from '@/components/mixins';
import Toggle from './dropdown-toggle';
import memoize from '@/utils/memoize';
import { mergeData } from 'vue-functional-data-merge';

const cprops = memoize(() => ({
  tag: strType('div'),
  title: strType('Dropdown'),
  btnGrp: boolType(),
  right: boolType()
}));

export default {
  functional: true,
  mixins: [Active],
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, slots, children, listeners }) {
    slots = slots();
    let els = slots.default;

    if (!els) {
      const menuEl = slots.menu,
        toggleData = {
          attrs: data.attrs,
          on: { toggle: listeners.toggle || (_ => {}) },
          props: { title: props.title }
        };

      els = [
        h(Toggle, toggleData, menuEl || undefined),
        ...(props.btnGrp ? [] : menuEl ? [menuEl] : [])
      ];
    }

    const cname = 'dropdown',
      vdata = mergeData(activeData(props), {
        staticClass: props.right ? `${cname} ${cname}-right` : cname
      });
    return h(props.tag, vdata, els);
  }
};

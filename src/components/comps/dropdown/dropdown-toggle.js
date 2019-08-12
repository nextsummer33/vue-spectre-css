import { SBtn, SBtnGrp } from '@/components/elements';
import { boolType, strType } from '@/utils/proptypes';
import { mergeData } from 'vue-functional-data-merge';

export default {
  functional: true,
  props: {
    btnGrp: boolType(),
    title: strType('')
  },
  render(h, { props, data, listeners, children }) {
    const onclick = { click: listeners.click || (_ => {}) },
      ontoggle = { click: listeners.toggle || (_ => {}) },
      toggleData = {
        staticClass: 'dropdown-toggle',
        on: ontoggle,
        attrs: { tabindex: 0 },
        props: { iconRight: 'caret', tag: 'a' }
      };

    if (props.btnGrp) {
      const btnData = {
        attrs: { ...data.attrs },
        props: { tag: 'a' }
      };

      return h(SBtnGrp, [
        h(SBtn, mergeData(btnData, { on: onclick }), props.title),
        h(SBtn, mergeData(btnData, toggleData)),
        ...(children || [])
      ]);
    }

    return h(SBtn, mergeData({ attrs: data.attrs }, toggleData), props.title);
  }
};

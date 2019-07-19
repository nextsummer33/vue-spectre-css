import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';

export default {
  functional: true,
  props: {
    tag: strType('form'),
    horizontal: boolType(),
    disabled: boolType()
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, { class: { 'form-horizontal': props.horizontal } }),
      props.disabled
        ? [h('fieldset', { attrs: { disabled: true } }, children)]
        : children
    );
  }
};

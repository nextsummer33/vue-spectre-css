import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';

export default {
  functional: true,
  props: {
    tag: strType('div'),
    centered: boolType()
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'tile',
        class: { 'tile-centered': props.centered }
      }),
      children
    );
  }
};

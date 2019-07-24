import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';

export default {
  functional: true,
  props: {
    tag: strType('p'),
    title: boolType(),
    subtitle: boolType()
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: props.subtitle ? 'tile-subtitle' : 'tile-title'
      }),
      children
    );
  }
};

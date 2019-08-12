import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';

export default {
  functional: true,
  props: {
    tag: strType('div'),
    nav: boolType()
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, { staticClass: props.nav ? 'menu menu-nav' : 'menu' }),
      children
    );
  }
};

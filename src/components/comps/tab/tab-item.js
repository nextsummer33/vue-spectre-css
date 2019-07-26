import { strType, boolType } from '@/utils/proptypes';
import TabLink from './tab-link';

export default {
  functional: true,
  props: {
    tag: strType('li'),
    action: boolType()
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      { staticClass: 'tab-item', class: { 'tab-action': props.action } },
      props.action ? children : [h(TabLink, data, children)]
    );
  }
};

import { strType } from '@/utils/proptypes';
import TabLink from './tab-link';

export default {
  functional: true,
  props: {
    tag: strType('li')
  },
  render(h, { props, data, children }) {
    return h(props.tag, { staticClass: 'tab-item' }, [
      h(TabLink, data, children)
    ]);
  }
};

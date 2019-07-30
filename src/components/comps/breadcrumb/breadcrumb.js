import { mergeData } from 'vue-functional-data-merge';
import { strType, arrType, boolType } from '@/utils/proptypes';
import Item from './breadcrumb-item';

export default {
  functional: true,
  props: {
    tag: strType('ul'),
    items: arrType(),
    router: boolType()
  },
  render(h, { props, data, children }) {
    const itemEl = ({ to, prefix, text }) =>
      props.router
        ? h(Item, { attrs: { linkTag: 'router-link', to, prefix, text } })
        : h(Item, { attrs: { href: to, prefix, text } });
    const ch = children || props.items.map(item => itemEl(item));
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'breadcrumb'
      }),
      ch
    );
  }
};

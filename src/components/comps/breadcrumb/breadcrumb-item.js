import { mergeData } from 'vue-functional-data-merge';
import { strType } from '@/utils/proptypes';

export default {
  functional: true,
  props: {
    tag: strType('li'),
    linkTag: strType('a'),
    prefix: strType(),
    text: strType()
  },
  render(h, { props, data, children }) {
    const linkEl = h(props.linkTag, data, props.text ? [props.text] : children);
    const prefixEl = props.prefix ? h('span', props.prefix) : undefined;

    return h(
      props.tag,
      { staticClass: 'breadcrumb-item' },
      [prefixEl, linkEl].filter(v => v)
    );
  }
};

import { strType } from '@/utils/proptypes';
import { Active, activeData, Badge, badgeData } from '@/mixins';
import { mergeData } from 'vue-functional-data-merge';

export default {
  functional: true,
  mixins: [Active, Badge],
  props: {
    tag: strType('a'),
    href: strType('#')
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, activeData(props), badgeData(props), {
        attrs: { href: props.href }
      }),
      children
    );
  }
};

import { mergeData } from 'vue-functional-data-merge';
import { strType } from '@/utils/proptypes';
import memoize from '@/utils/memoize';
import { Tooltip, tooltipData, Badge, badgeData } from '@/components/mixins';

const cprops = memoize(() => {
  return {
    tag: strType('a'),
    to: strType('#')
  };
});

export default {
  functional: true,
  mixins: [Tooltip, Badge],
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children }) {
    const vdata = mergeData(data, badgeData(props), tooltipData(props), {
      attrs: {
        href: props.to
      }
    });
    return h(props.tag, vdata, children);
  }
};

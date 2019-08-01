import { strType } from '@/utils/proptypes';
import { mergeData } from 'vue-functional-data-merge';
import Icon from '@/components/elements/icon';

export default {
  functional: true,
  props: {
    tag: strType('div'),
    icon: strType()
  },
  render(h, { props, data, children }) {
    const ch = children || [h(Icon, { props: { icon: props.icon } })];
    const vdata = mergeData(data, { staticClass: 'empty-icon' });
    return h(props.tag, vdata, ch);
  }
};

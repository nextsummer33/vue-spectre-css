import { mergeData } from 'vue-functional-data-merge';
import { strType, arrType, boolType } from '@/utils/proptypes';
import { Active, activeData } from '@/components/mixins';

export default {
  functional: true,
  mixins: [Active],
  props: {
    tag: strType('tr'),
    items: arrType(),
    th: boolType()
  },
  render(h, { props, data, children }) {
    const ch = children || props.items.map(v => h(props.th ? 'th' : 'td', v));
    return h(props.tag, mergeData(data, activeData(props)), ch);
  }
};

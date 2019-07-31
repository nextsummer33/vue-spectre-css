import { strType } from '@/utils/proptypes';
import { mergeData } from 'vue-functional-data-merge';

const clsData = name => ({ staticClass: name });

export default {
  functional: true,
  props: {
    tag: strType('div')
  },
  render(h, { props, data, children }) {
    const ctnEl = h('div', clsData('content'), children);
    return h(props.tag, mergeData(data, clsData('modal-body')), [ctnEl]);
  }
};

import Vue from '@/utils/vue-local';
import { mergeData } from 'vue-functional-data-merge';
// import a from "@/utils/get-var";
const props = {
  tag: {
    type: String,
    default: 'div'
  }
};

export default Vue.extend({
  name: 'SCol',
  functional: true,
  props,
  render(h, { props, data, children }) {
    const componentData = {
      staticClass: 'column'
    };
    return h(props.tag, mergeData(data, componentData), children);
  }
});

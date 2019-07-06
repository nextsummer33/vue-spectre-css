import { mergeData } from 'vue-functional-data-merge';
import { stringType, boolType } from '@/utils/proptypes';
import Vue from '@/utils/vue';

export default Vue.extend({
  name: 'SNavbarItem',
  functional: true,
  props: {
    tag: stringType('section'),
    center: boolType(false)
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: props.center ? 'navbar-center' : 'navbar-section'
      }),
      children
    );
  }
});

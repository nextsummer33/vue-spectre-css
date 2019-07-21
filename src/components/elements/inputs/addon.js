import { mergeData } from 'vue-functional-data-merge';
import { strType } from '@/utils/proptypes';
import { Size, sizeData } from '@/components/mixins';

export default {
  functional: true,
  mixins: [Size],
  props: {
    tag: strType('span')
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, sizeData('addon', props), {
        staticClass: 'input-group-addon'
      }),
      children
    );
  }
};

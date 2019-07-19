import { Size, sizeData } from '@/components/mixins';
import { mergeData } from 'vue-functional-data-merge';
import { strType } from '@/utils/proptypes';

export default {
  functional: true,
  mixins: [Size],
  props: {
    tag: strType('label')
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(
        data,
        {
          staticClass: 'form-label'
        },
        sizeData('label', props)
      ),
      children
    );
  }
};

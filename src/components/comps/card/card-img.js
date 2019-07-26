import { SImg } from '@/components/elements';
import { strType } from '@/utils/proptypes';

export default {
  functional: true,
  props: {
    tag: strType('div')
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      { staticClass: 'card-image' },
      children || [h(SImg, data)]
    );
  }
};

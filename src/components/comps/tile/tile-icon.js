import { strType, boolType } from '@/utils/proptypes';
import { SIcon } from '@/components/elements';

export default {
  functional: true,
  props: {
    tag: strType('div'),
    centered: boolType()
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      { staticClass: 'tile-icon' },
      children || [h(SIcon, data)]
    );
  }
};

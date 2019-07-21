import { mergeData } from 'vue-functional-data-merge';
import { strType } from '@/utils/proptypes';
import { Size, sizeData } from '@/components/mixins';
import Addon from './addon';

export default {
  functional: true,
  mixins: [Size],
  props: {
    tag: strType('div'),
    addonLeft: strType(),
    addonRight: strType()
  },
  render(h, { props, data, children }) {
    const { addonLeft, addonRight, sm, lg } = props;
    children = children || [];
    addonLeft &&
      children.splice(0, 0, h(Addon, { props: { sm, lg } }, addonLeft));
    addonRight &&
      children.splice(
        children.length,
        0,
        h(Addon, { props: { sm, lg } }, addonRight)
      );

    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'input-group'
      }),
      children
    );
  }
};

import { mergeData } from 'vue-functional-data-merge';
import { strType } from '@/utils/proptypes';
import { Size, Inline, inlineData } from '@/components/mixins';
import Addon from './addon';

export default {
  functional: true,
  mixins: [Size, Inline],
  props: {
    tag: strType('div'),
    addonLeft: strType(),
    addonRight: strType()
  },
  render(h, { props, data, children }) {
    const { addonLeft, addonRight, sm, lg } = props;
    const ch = children || [];

    if (addonLeft) {
      ch.splice(0, 0, h(Addon, { props: { sm, lg } }, addonLeft));
    }

    if (addonRight) {
      ch.splice(ch.length, 0, h(Addon, { props: { sm, lg } }, addonRight));
    }

    return h(
      props.tag,
      mergeData(data, inlineData('input', props), {
        staticClass: 'input-group'
      }),
      ch
    );
  }
};

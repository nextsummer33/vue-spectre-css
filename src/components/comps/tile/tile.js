import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import { STileIcon, STileAction, STileContent } from './index';

export default {
  functional: true,
  props: {
    tag: strType('div'),
    centered: boolType()
  },
  render(h, { props, data, slots }) {
    const slotEls = slots();
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'tile',
        class: { 'tile-centered': props.centered }
      }),
      slotEls.default || [
        slotEls.icon && h(STileIcon, slotEls.icon),
        slotEls.content && h(STileContent, slotEls.content),
        slotEls.action && h(STileAction, slotEls.action)
      ]
    );
  }
};

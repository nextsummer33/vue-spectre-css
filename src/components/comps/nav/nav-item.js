import { mergeData } from 'vue-functional-data-merge';
import { SLink } from '@/components/elements';
import { strType } from '@/utils/proptypes';
import { Active, activeData } from '@/components/mixins';

export default {
  functional: true,
  mixins: [Active],
  props: {
    tag: strType('li')
  },
  render(h, { props, data, slots }) {
    const slotEls = slots();
    const linkEl = slotEls.link || h(SLink, data, slotEls.default);
    const vdata = mergeData(activeData(props), {
      staticClass: 'nav-item'
    });
    return h(props.tag, vdata, [linkEl, slotEls.children]);
  }
};

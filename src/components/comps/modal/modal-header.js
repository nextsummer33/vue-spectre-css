import { strType, boolType } from '@/utils/proptypes';
import { SBtn } from '@/components/elements';
import Title from './modal-title';

const closeData = fn => ({
  props: { clear: true, tag: 'a' },
  class: ['float-right'],
  attrs: { href: '#close', 'aria-label': 'Close' },
  on: {
    click: ev => fn(ev)
  }
});

export default {
  functional: true,
  props: {
    tag: strType('div'),
    noclose: boolType(),
    title: strType()
  },
  render(h, { props, data, slots, listeners }) {
    const slotEls = slots();
    const dismiss = listeners.dismiss || (_ => {});
    // create a dismiss close button and listen to click event
    const btnEl = props.noclose ? undefined : h(SBtn, closeData(dismiss));
    // use default slot as title element if exists.
    const titleEl =
      slotEls.default || (props.title && h(Title, data, props.title));
    return h(props.tag, { staticClass: 'modal-header' }, [btnEl, titleEl]);
  }
};

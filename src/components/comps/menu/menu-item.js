import { strType, boolType } from '@/utils/proptypes';
import Badge from './menu-badge';
import Link from '@/components/elements/link';
import memoize from '@/utils/memoize';

const cprops = memoize(() => {
  return {
    tag: strType('li'),
    title: strType(),
    divider: boolType(),
    content: strType(),
    badge: strType()
  };
});

export default {
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, slots, listeners }) {
    // return meneu item as divider if divider is set
    if (props.divider) {
      return h(props.tag, {
        staticClass: 'divider',
        attrs: { 'data-content': props.content }
      });
    }

    const slotEls = slots();

    let ch = slotEls.default || [
      // content slot or link element by default
      slotEls.content ||
        h(
          Link,
          { attrs: data.attrs, on: { click: listeners.click || (_ => {}) } },
          [props.title]
        ),
      // badge slot or babdge element by default
      (slotEls.badge && h(Badge, slotEls.badge)) ||
        (props.badge && h(Badge, { props: { value: props.badge } }))
    ];

    return h(props.tag, { staticClass: 'menu-item' }, ch);
  }
};

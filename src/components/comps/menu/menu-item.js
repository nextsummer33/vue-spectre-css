import { strType, boolType } from '@/utils/proptypes';
import Badge from './menu-badge';
import { SLink } from '@/components/elements';
import memoize from '@/utils/memoize';

const cprops = memoize(() => ({
  tag: strType('li'),
  divider: boolType(),
  badge: strType(),
  title: strType('')
}));

export default {
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, slots }) {
    // return meneu item as divider if divider is set
    if (props.divider) {
      return h(props.tag, {
        staticClass: 'divider',
        attrs: { 'data-content': props.title }
      });
    }

    slots = slots();
    let els = slots.default;

    if (!els) {
      // passing data into link element
      const linkEl = h(SLink, data, props.title);
      // badge slot or babdge element by default
      const badgeEl =
        (slots.badge && h(Badge, slots.badge)) ||
        (props.badge && h(Badge, { props: { value: props.badge } }));

      els = [linkEl, badgeEl];
    }

    return h(props.tag, { staticClass: 'menu-item' }, els);
  }
};

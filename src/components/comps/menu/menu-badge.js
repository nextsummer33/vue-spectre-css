import { strType } from '@/utils/proptypes';
import Label from '@/components/elements/label';

export default {
  functional: true,
  props: {
    tag: strType('div'),
    value: strType('')
  },
  render(h, { props, children }) {
    const ch = children || [
      h(Label, { props: { tag: 'label', primary: true } }, [props.value || ''])
    ];
    return h(props.tag, { staticClass: 'menu-badge' }, ch);
  }
};

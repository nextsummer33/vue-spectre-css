import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import Header from './accordion-header';
import Body from './accordion-body';

export default {
  functional: true,
  props: {
    tag: strType('div'),
    for: strType(),
    mut: boolType()
  },
  render(h, { props, data, slots }) {
    slots = slots();

    let children = slots.default || [
      h('input', {
        attrs: {
          type: props.mut ? 'radio' : 'checkbox',
          id: props.for,
          name: props.mut ? 'accordion-radio' : 'accordion-checkbox',
          hidden: true
        }
      }),
      h(Header, { attrs: { for: props.for } }, slots.header),
      h(Body, null, slots.body)
    ];

    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'accordion'
      }),
      children
    );
  }
};

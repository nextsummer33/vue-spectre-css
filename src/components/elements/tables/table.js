import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType, arrType } from '@/utils/proptypes';
import Tr from './tr';

const header = (h, d) => h(Tr, { props: { items: d, th: true } });
const body = (h, ds) => ds.map(items => h(Tr, { props: { items } }));

export default {
  functional: true,
  props: {
    tag: strType('table'),
    striped: boolType(),
    hover: boolType(),
    scroll: boolType(),
    headers: arrType(),
    data: arrType()
  },
  render(h, { props, data, slots }) {
    const slotEls = slots();
    const ch = slotEls.default || [
      h('thead', slotEls.thead || [header(h, props.headers)]),
      h('tbody', slotEls.tbody || [body(h, props.data)])
    ];
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'table',
        class: {
          'table-striped': props.striped,
          'table-hover': props.hover,
          'table-scroll': props.scroll
        }
      }),
      ch
    );
  }
};

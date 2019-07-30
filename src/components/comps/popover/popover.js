import { getDirections } from '@/utils/get-var';
import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import Container from './popover-container';
import memoize from '@/utils/memoize';

const cprops = memoize(() =>
  getDirections().reduce((o, v) => (o[v] = boolType()) && o, {
    tag: strType('div')
  })
);

export default {
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, slots }) {
    const cls = [
      props.top
        ? 'popover-top'
        : props.bottom
        ? 'popover-bottom'
        : props.right
        ? 'popover-right'
        : ''
    ];
    const slotEls = slots();
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'popover',
        class: cls
      }),
      slotEls.default || [slotEls.toggle, h(Container, slotEls.container)]
    );
  }
};

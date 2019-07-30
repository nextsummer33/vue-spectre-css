import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import memoize from '@/utils/memoize';
import { getDirections } from '@/utils/get-var';
import Container from './popover-container';

const cprops = memoize(() => {
  const posProps = getDirections().reduce(
    (o, v) => (o[v] = boolType()) && o,
    {}
  );
  return {
    tag: strType('div'),
    ...posProps
  };
});

export default {
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children, slots }) {
    const cls = [];
    const slotEls = slots();

    getDirections().forEach(dir => {
      props[dir] && cls.push('popover-' + dir);
    });

    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'popover',
        class: cls
      }),
      children || [slotEls.toggle, h(Container, slotEls.container)]
    );
  }
};

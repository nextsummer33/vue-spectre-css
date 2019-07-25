import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import { memoize } from '@/utils/memoize';
import { getToast } from '@/utils/get-var';
import { SBtn } from '@/components/elements';
import { boolKeys } from '@/utils/object';

const cprops = memoize(() => {
  const props = getToast().colors.reduce(
    (o, v) => (o[v] = boolType()) && o,
    {}
  );
  return {
    tag: strType('div'),
    buttonless: boolType(),
    width: strType(),
    ...props
  };
});

const btnEl = (h, clearFn) => {
  const data = {
    on: { click: clearFn || (() => {}) },
    props: { clear: true },
    class: { 'float-right': true }
  };
  return h(SBtn, data);
};

const mclass = props => boolKeys(props).map(v => 'toast-' + v);

export default {
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, slots, listeners }) {
    const ch = [
      slots().default,
      props.buttonless ? undefined : btnEl(h, listeners.clear)
    ];

    // ignore the buttonless props
    props.buttonless = false;

    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'toast',
        class: mclass(props),
        style: props.width ? { 'max-width': props.width } : {}
      }),
      ch
    );
  }
};

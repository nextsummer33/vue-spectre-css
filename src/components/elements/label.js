import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import memoize from '@/utils/memoize';
import { getIcon } from '@/utils/get-var';
import { boolKeys } from '@/utils/object';

const cprops = memoize(() => {
  const { colors, shapes } = getIcon();
  const props = colors
    .concat(shapes)
    .reduce((p, v) => (p[v] = boolType()) && p, Object.create(null));

  return {
    tag: strType('span'),
    ...props
  };
});

const mclass = memoize(props => {
  const cls = boolKeys(props).map(v => 'label-' + v);
  return cls;
}, true);

export default {
  name: 'SLabel',
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'label',
        class: mclass(props)
      }),
      children
    );
  }
};

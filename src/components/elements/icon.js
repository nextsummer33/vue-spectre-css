import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import memoize from '@/utils/memoize';
import { getIcon } from '@/utils/get-var';
import { boolKeys } from '@/utils/object';

const cprops = memoize(() => {
  const { sizes } = getIcon();
  const props = sizes.reduce(
    (p, v) => (p[v] = boolType()) && p,
    Object.create(null)
  );

  return {
    tag: strType('i'),
    icon: strType(),
    font: strType(),
    centered: boolType(),
    ...props
  };
});

const mclass = props => {
  // skip the centered, handle by special case
  const centered = props.centered;
  props.centered = false;

  const cls = boolKeys(props).map(v => 'icon-' + v);
  props.icon && cls.push('icon-' + props.icon);
  centered && cls.push('centered');

  return cls;
};

export default {
  name: 'SIcon',
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'icon',
        class: mclass(props),
        style: props.font && { 'font-size': props.font + 'px' }
      }),
      children
    );
  }
};

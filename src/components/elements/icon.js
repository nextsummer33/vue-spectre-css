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
    ...props
  };
});

const iconClass = memoize(props => {
  const cls = boolKeys(props).map(v => 'icon-' + v);
  props.icon && cls.push('icon-' + props.icon);
  return cls;
}, true);

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
        class: iconClass(props),
        style: props.font && { 'font-size': props.font + 'px' }
      }),
      children
    );
  }
};

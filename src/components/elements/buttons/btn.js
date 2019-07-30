import { getButton as getBtn } from '@/utils/get-var';
import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import { tooltipData, Tooltip } from '@/components/mixins';
import Icon from '../icon';
import memoize from '@/utils/memoize';

const cprops = memoize(() => {
  const { sizes, states, types, colors } = getBtn();
  const props = colors
    .concat(types, sizes, states, 'actionCircle', 'inputGrp')
    .reduce((p, v) => (p[v] = boolType()) && p, Object.create(null));

  return {
    tag: strType('button'),
    icon: strType(),
    iconRight: strType(),
    ...props
  };
});

const mclass = props => {
  const { states, sizes, types, colors } = getBtn();
  const cls = [];
  // special case for circle
  props.actionCircle && (props.action = true) && cls.push('s-circle');
  // input group button case
  props.inputGrp && cls.push('input-group-btn');

  const addCls = prefix => v => props[v] && cls.push(prefix + v);
  const btnCls = addCls('btn-');
  sizes.forEach(btnCls);
  colors.forEach(btnCls);
  types.forEach(btnCls);
  states.forEach(addCls(''));

  return cls;
};

export default {
  functional: true,
  mixins: [Tooltip],
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children }) {
    // handle the icon component position
    const icon = props.icon || props.iconRight;
    const icnVm = icon && h(Icon, { props: { icon } });
    let child = children || [];
    child =
      (props.icon && [icnVm, ' ', ...child]) ||
      (props.iconRight && [...child, ' ', icnVm]) ||
      child;

    return h(
      props.tag,
      mergeData(data, tooltipData(props), {
        staticClass: 'btn',
        class: mclass(props)
      }),
      child
    );
  }
};

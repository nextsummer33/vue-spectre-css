import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import memoize from '@/utils/memoize';
import { getButton as getBtn } from '@/utils/get-var';
import { boolKeys } from '@/utils/object';
import Icon from '../icon';

const cprops = memoize(() => {
  const { sizes, states, types, colors } = getBtn();
  const props = colors
    .concat(types, sizes, states, 'actionCircle', 'inputGrp')
    .reduce((p, v) => (p[v] = boolType()) && p, Object.create(null));

  return {
    tag: strType('button'),
    iconLeft: strType(),
    iconRight: strType(),
    ...props
  };
});

const mclass = props => {
  const { states } = getBtn();
  const cpyps = Object.assign({}, props);
  const cls = [];

  // special case for circle
  cpyps.actionCircle &&
    (cpyps.action = delete cpyps.actionCircle) &&
    cls.push('s-circle');
  // input group button case
  cpyps.inputGrp && delete cpyps.inputGrp && cls.push('input-group-btn');

  // handle boolean properties
  boolKeys(cpyps).forEach(v => {
    cls.push(states.includes(v) ? v : 'btn-' + v);
  });

  return cls;
};

export default {
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children }) {
    // handle the icon component position
    const icon = props.iconLeft || props.iconRight;
    const icnVm = icon && h(Icon, { props: { icon } });
    let child = children || [];
    child =
      (props.iconLeft && [icnVm, ' ', ...child]) ||
      (props.iconRight && [...child, ' ', icnVm]) ||
      child;

    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'btn',
        class: mclass(props)
      }),
      child
    );
  }
};

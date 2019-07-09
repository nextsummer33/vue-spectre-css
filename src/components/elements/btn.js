import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import memoize from '@/utils/memoize';
import { getButton as getBtn } from '@/utils/get-var';

const cprops = memoize(() => {
  const { sizes, states, types, colors } = getBtn();
  const props = colors
    .concat(types, sizes, states, 'actionCircle')
    .reduce((p, v) => (p[v] = boolType()) && p, {});

  return {
    tag: strType('button'),
    icon: strType(''),
    ...props
  };
});

const btnClass = memoize(props => {
  const { states } = getBtn();
  const cpyps = Object.assign({}, props);
  const cls = [];

  // special case for circle
  if (cpyps.actionCircle) {
    cpyps.action = delete cpyps.actionCircle;
    cls.push('s-circle');
  }

  // handle boolean properties
  Object.entries(cpyps)
    .filter(p => typeof p[1] == 'boolean' && p[1])
    .forEach(p => {
      const v = p[0];
      cls.push(states.includes(v) ? v : 'btn-' + v);
    });

  return cls;
}, true);

export default {
  name: 'SBtn',
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'btn',
        class: btnClass(props)
      }),
      children || ['Button']
    );
  }
};

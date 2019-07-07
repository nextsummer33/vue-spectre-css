import { mergeData } from 'vue-functional-data-merge';
import { stringType, boolType } from '@/utils/proptypes';
import memoize from '@/utils/memoize';
import { getButton as getBtn } from '@/utils/get-var';

const cprops = memoize(() => {
  const bvar = getBtn();

  const props = bvar.colors
    .concat(bvar.types, bvar.sizes, bvar.states, 'actionCircle')
    .reduce((p, v) => (p[v] = boolType()) && p, {});

  return {
    tag: stringType('button'),
    ...props
  };
});

const btnClass = memoize((props, injs) => {
  const bvar = getBtn();
  const cpyps = Object.assign({}, props);
  const cls = [];

  // special case for circle
  if (cpyps.actionCircle) {
    cpyps.action = cls.push('s-circle') > 0;
    delete cpyps.actionCircle;
  }

  // handle injections
  bvar.parentVars.forEach(v => {
    if (injs.vars[v])
      v === 'inputGroup' ? cls.push('input-group-btn') : (cpyps[v] = true);
  });

  // handle boolean properties
  Object.entries(cpyps)
    .filter(p => !p[1].length && p[1])
    .forEach(p => {
      const v = p[0];
      cls.push(bvar.states.includes(v) ? v : 'btn-' + v);
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
  inject: {
    vars: {
      from: 'parentVars',
      default: {}
    }
  },
  render(h, { props, data, children, injections }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'btn',
        class: btnClass(props, injections)
      }),
      children || ['Button']
    );
  }
};

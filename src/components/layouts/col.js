import memoize from '@/utils/memoize';
import { contains } from '@/utils/array';
import { mergeData } from 'vue-functional-data-merge';
import { getLayout } from '@/utils/get-var';
import { splitCamelCase } from '@/utils/string';
import { boolType, strType } from '@/utils/proptypes';
import { boolKeys, isExist } from '@/utils/object';

const colRegx = /^\d*$|auto/;
const numStrType = () => {
  return {
    type: [Number, String],
    default: null,
    validator: val => {
      if (typeof val !== 'string' && typeof val !== 'number') {
        return false;
      }
      const valStr = typeof val === 'number' ? val.toString() : val;
      return valStr != '0' && colRegx.test(valStr);
    }
  };
};

const cprops = memoize(() => {
  const { viewports, offsets } = getLayout();
  let props = viewports.reduce((p, vp) => {
    p[`${vp}Auto`] = p[`${vp}Show`] = p[`${vp}Hide`] = boolType();
    p[`${vp}Col`] = numStrType();
    return p;
  }, Object.create(null));

  props = offsets.reduce((p, v) => (p[`${v}Auto`] = boolType() && p), props);

  return {
    tag: strType('div'),
    col: numStrType(),
    ...props
  };
});

const mclass = memoize(props => {
  const { viewports, offsets } = getLayout();
  const cls = [];
  let bks = boolKeys(props);

  if (props.col) {
    cls.push('col-' + props.col);
  }

  viewports.forEach(vp => {
    const v = props[`${vp}Col`];
    isExist(v) && cls.push(`col-${vp}-${v || 'auto'}`);
  });

  // clean up the offset props
  const norMlMr = k => k !== 'mlAuto' && k != 'mrAuto';
  if (bks.indexOf('mxAuto') > -1) {
    bks = bks.filter(norMlMr);
  } else if (contains(bks, 'mlAuto', 'mrAuto')) {
    bks = bks.filter(norMlMr);
    bks.push('mxAuto');
  }

  for (let i = 0; i < bks.length; i++) {
    const k = bks[i];
    const tokens = splitCamelCase(k);
    if (viewports.indexOf(tokens[0]) > -1) {
      if (tokens[1] === 'show' || tokens[1] === 'hide') {
        cls.push(`${tokens[1]}-${tokens[0]}`);
      } else if (tokens[1] === 'auto') {
        cls.push(`col-${tokens[0]}-auto`);
      }
    } else if (offsets.indexOf(tokens[0]) > -1) {
      cls.push(`col-${tokens[0]}-auto`);
    }
  }

  return cls;
}, true);

export default {
  name: 'SCol',
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, { staticClass: 'column', class: mclass(props) }),
      children
    );
  }
};

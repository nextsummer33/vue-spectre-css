import { arrayContains } from '@/utils/array';
import { mergeData } from 'vue-functional-data-merge';
import { getCachedLayout } from '@/utils/get-var';
import memoize from '@/utils/memoize';
import { dashCase, splitCamelCase } from '@/utils/string';

const colRegx = /^\d*$|auto/;
const boolType = () => {
  return { type: Boolean, default: false };
};
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

const genProps = memoize(() => {
  const layout = getCachedLayout();
  let compProps = layout.viewports.reduce((props, vp) => {
    props[`${vp}Auto`] = props[`${vp}Show`] = props[`${vp}Hide`] = boolType();
    props[`${vp}Col`] = numStrType();
    return props;
  }, Object.create(null));

  compProps = layout.offsets.reduce((props, offset) => {
    props[`${offset}Auto`] = boolType();
    return props;
  }, compProps);

  const props = {
    tag: {
      type: String,
      default: 'div'
    },
    col: numStrType(),
    ...compProps
  };

  return props;
});

const mDashCase = memoize(dashCase);

export default {
  name: 'SCol',
  functional: true,
  get props() {
    delete this.props;
    return (this.props = genProps());
  },
  render(h, { props, data, children }) {
    const layout = getCachedLayout();
    const classlist = [];
    const entries = Object.entries(props);

    if (props.col) {
      classlist.push('col-' + props.col);
    }

    layout.viewports.forEach(vp => {
      const val = props[`${vp}Col`];
      if (val) {
        classlist.push(`col-${vp}-${val}`);
      }
    });

    let keys = entries.filter(pv => pv[1] === true).map(pv => pv[0]);
    // clean up the offset props
    const norMlMr = k => k !== 'mlAuto' && k != 'mrAuto';
    if (arrayContains(keys, 'mxAuto')) {
      keys = keys.filter(norMlMr);
    } else if (arrayContains(keys, 'mlAuto', 'mrAuto')) {
      keys = keys.filter(norMlMr);
      keys.push('mxAuto');
    }

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const tokens = splitCamelCase(key);
      if (arrayContains(layout.viewports, tokens[0])) {
        if (tokens[1] === 'show' || tokens[1] === 'hide') {
          classlist.push(`${tokens[1]}-${tokens[0]}`);
        } else if (tokens[1] === 'auto') {
          classlist.push(`col-${tokens[0]}-auto`);
        }
      } else if (arrayContains(layout.offsets, tokens[0])) {
        classlist.push(`col-${tokens[0]}-auto`);
      }
    }

    const componentData = {
      staticClass: 'column',
      class: classlist
    };

    return h(props.tag, mergeData(data, componentData), children);
  }
};

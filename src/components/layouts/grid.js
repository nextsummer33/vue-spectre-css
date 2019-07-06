import { mergeData } from 'vue-functional-data-merge';
import memoize from '@/utils/memoize';
import { stringType, boolType } from '@/utils/proptypes';
import { getCachedLayout } from '@/utils/get-var';

const cprops = memoize(() => {
  const props = getCachedLayout().viewports.reduce((p, vp) => {
    p[vp] = boolType();
    return p;
  }, {});

  return {
    tag: stringType('div'),
    ...props
  };
});

export default {
  name: 'SGrid',
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children }) {
    const _class = Object.entries(props)
      .filter(p => !p[1].length && p[1])
      .reduce((arr, p) => {
        arr.push('grid-' + p[0]);
        return arr;
      }, []);

    return h(
      props.tag,
      mergeData(data, { staticClass: 'container', class: _class }),
      children
    );
  }
};

import { mergeData } from 'vue-functional-data-merge';
import memoize from '@/utils/memoize';
import { strType, boolType } from '@/utils/proptypes';

const cprops = memoize(() => {
  return {
    tag: strType('div'),
    gapless: boolType(),
    oneline: boolType()
  };
});

export default {
  name: 'SRow',
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children }) {
    const cls = [
      props.gapless && 'col-gapless',
      props.oneline && 'col-oneline'
    ].filter(Boolean);

    return h(
      props.tag,
      mergeData(data, { staticClass: 'columns', class: cls }),
      children
    );
  }
};

import Vue from 'vue';
import { mergeData } from 'vue-functional-data-merge';
import memoize from '@/utils/memoize';
import { stringType, boolType } from '@/utils/proptypes';

const genProps = memoize(() => {
  return {
    tag: stringType('div'),
    gapless: boolType(),
    oneline: boolType()
  };
});

export default Vue.extend({
  name: 'SRow',
  functional: true,
  get props() {
    delete this.props;
    return (this.props = genProps());
  },
  render(h, { props, data, children }) {
    const _class = [
      props.gapless && 'col-gapless',
      props.oneline && 'col-oneline'
    ].filter(Boolean);

    return h(
      'div',
      mergeData(data, { staticClass: 'columns', class: _class }),
      children
    );
  }
});

import { mergeData } from 'vue-functional-data-merge';
import { strType } from './proptypes';
import { isStr, isFn } from '@/utils/object';

const rnproxy = stclass => (h, { props, data, children }) =>
  h(
    props.tag,
    mergeData(data, {
      staticClass: isStr(stclass)
        ? stclass
        : isFn(stclass)
        ? stclass(props)
        : ''
    }),
    children
  );

export const fcomp = (tag, stclass) => ({
  functional: true,
  props: {
    tag: strType(tag)
  },
  render: rnproxy(stclass)
});

export default {
  fcomp
};

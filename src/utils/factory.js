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

export const fcomp = (tag, stclass) => {
  return {
    functional: true,
    props: {
      tag: strType(tag)
    },
    render: rnproxy(stclass)
  };
};

export const comp = (tag, stclass) => {
  return {
    props: {
      tag: strType(tag)
    },
    render(h) {
      return h(
        this.tag,
        mergeData(this.$data, { staticClass: stclass }),
        this.$slots.default
      );
    }
  };
};

export default {
  fcomp,
  comp
};

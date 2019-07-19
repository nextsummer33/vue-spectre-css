import { mergeData } from 'vue-functional-data-merge';
import { strType } from './proptypes';
import { isStr, isFn } from '@/utils/object';

const rnproxy = stclass => {
  return (h, { props, data, children }) => {
    return h(
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
  };
};

export const fcomp = (tag, stclass) => {
  return {
    functional: true,
    props: {
      tag: strType(tag)
    },
    render: rnproxy(stclass)
  };
};

export default {
  fcomp
};

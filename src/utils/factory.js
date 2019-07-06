import { mergeData } from 'vue-functional-data-merge';
import { stringType } from './proptypes';

const rnproxy = stclass => {
  return (h, { props, data, children }) => {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: typeof stclass == 'string' ? stclass : stclass(props)
      }),
      children
    );
  };
};

export const fcomp = (tag, stclass) => {
  return {
    functional: true,
    props: {
      tag: stringType(tag)
    },
    render: rnproxy(stclass)
  };
};

export default {
  fcomp
};

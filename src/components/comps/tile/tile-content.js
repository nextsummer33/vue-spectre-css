import { mergeData } from 'vue-functional-data-merge';
import { strType } from '@/utils/proptypes';
import { STileText as Txt } from './index';

export default {
  functional: true,
  props: {
    tag: strType('div'),
    title: strType(),
    subtitle: strType()
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'tile-content'
      }),
      children || [
        props.title && h(Txt, props.title),
        props.subtitle && h(Txt, { props: { subtitle: true } }, props.subtitle)
      ]
    );
  }
};

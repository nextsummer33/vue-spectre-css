import { strType } from '@/utils/proptypes';
import PanelTitle from './panel-title';
import { mergeData } from 'vue-functional-data-merge';

export default {
  functional: true,
  props: {
    tag: strType('div'),
    title: strType('')
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, { staticClass: 'panel-header' }),
      children || [h(PanelTitle, props.title)]
    );
  }
};

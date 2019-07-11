import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import { getVideo } from '@/utils/get-var';
import { arrayContains } from '@/utils/array';

export default {
  name: 'SVideo',
  functional: true,
  props: {
    iframe: boolType(),
    ratio: strType()
  },
  render(h, { props, data, children }) {
    const staticClass = 'video-responsive';
    const cls =
      props.ratio && arrayContains(getVideo().ratios, props.ratio)
        ? [staticClass + '-' + props.ratio]
        : [];
    const vdata = { staticClass, class: cls };
    return props.iframe
      ? h('div', vdata, [h('iframe', data, children)])
      : h('video', mergeData(data, vdata), children);
  }
};

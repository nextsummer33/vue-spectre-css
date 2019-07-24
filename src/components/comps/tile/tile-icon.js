import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import { SAvatar } from '@/components/comps/avatar';
import { SIcon } from '@/components/elements';

const iconWrapper = (h, staticClass, size, data) => {
  const style = staticClass
    ? undefined
    : `display: flex;align-items: center;align-content: space-around;width: ${size};height: ${size};`;
  return h('div', { staticClass, style }, [
    h(SIcon, mergeData(data, { style: 'margin: auto;' }))
  ]);
};

export default {
  functional: true,
  props: {
    tag: strType('div'),
    avatar: boolType(),
    wrapperClass: strType(),
    wrapperSize: strType('32px')
  },
  render(h, { props, data, children }) {
    return h(
      props.tag,
      { staticClass: 'tile-icon' },
      children || [
        props.avatar
          ? h(SAvatar, data)
          : iconWrapper(h, props.wrapperClass, props.wrapperSize, data)
      ]
    );
  }
};

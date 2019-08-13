import { mergeData } from 'vue-functional-data-merge';
import { strType } from '@/utils/proptypes';
import { AllSize, allSizeData } from '@/mixins';
import { SAvatarPresence as AP, SAvatarIcon as AI } from './index';
import { getAvatar } from '@/utils/get-var';
import { isExist } from '@/utils/object';
import { memoize } from '@/utils/memoize';

const presenceEl = (h, status) => {
  const isContained = getAvatar().presences.indexOf(status) > -1;
  return h(AP, {
    props: isContained ? { [status]: true } : {}
  });
};

const cprops = memoize(() => {
  return {
    tag: strType('figure'),
    initial: strType(),
    iconSrc: strType(),
    iconAlt: strType(),
    bgColor: strType(),
    presence: strType()
  };
});

const iconEl = (h, src, alt) => h(AI, { attrs: { src, alt } });
export default {
  functional: true,
  mixins: [AllSize],
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children }) {
    const ch = children || [];
    const attrs = data.attrs || {};

    if (!ch.length) {
      ch.push(
        !props.initial && attrs.src ? h('img', data) : undefined,
        props.iconSrc
          ? iconEl(h, props.iconSrc, props.iconAlt)
          : isExist(props.presence)
          ? presenceEl(h, props.presence)
          : undefined
      );
    }

    return h(
      props.tag,
      mergeData(
        allSizeData('avatar', props),
        {
          staticClass: 'avatar',
          attrs: {
            'data-initial': props.initial || undefined
          },
          style: props.bgColor
            ? `background-color: ${props.bgColor};`
            : undefined
        },
        props.tag === 'img' ? data : {}
      ),
      ch
    );
  }
};

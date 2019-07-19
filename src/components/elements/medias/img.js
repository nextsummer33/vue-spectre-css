import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import memoize from '@/utils/memoize';
import { getImage } from '@/utils/get-var';
import { boolKeys } from '@/utils/object';
import { capf, dashCase } from '@/utils/string';

const cprops = memoize(() => {
  const { fits, aligns } = getImage();
  let props = fits.reduce(
    (p, v) => (p[`fit${capf(v)}`] = boolType()) && p,
    Object.create(null)
  );

  props = aligns.reduce(
    (p, v) => (p[`text${capf(v)}`] = boolType()) && p,
    props
  );

  return {
    caption: strType(),
    alt: strType(),
    figure: boolType(),
    ...props
  };
});

export default {
  name: 'SImg',
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children }) {
    const cls = boolKeys(props).reduce(
      (o, v) => {
        const dv = dashCase(v);
        if (v.indexOf('fit') > -1) {
          o.img.push('img-' + dv);
        } else if (v.indexOf('text') > -1) {
          o.cap.push(dv);
        }
        return o;
      },
      { img: [], cap: [] }
    );

    let vm = h(
      'img',
      mergeData(data, {
        staticClass: 'img-responsive',
        class: cls.img,
        attrs: {
          alt: props.alt
        }
      }),
      children
    );

    if (props.figure) {
      vm = h(
        'figure',
        { staticClass: 'figure' },
        props.caption
          ? [
              vm,
              h(
                'figcaption',
                {
                  staticClass: 'figure-caption',
                  class: cls.cap
                },
                props.caption
              )
            ]
          : [vm]
      );
    }
    return vm;
  }
};

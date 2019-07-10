import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import memoize from '@/utils/memoize';
import { getImage } from '@/utils/get-var';
import { boolKeys } from '@/utils/object';
import { capf, dashCase } from '@/utils/string';

const cprops = memoize(() => {
  const { fits, alignments } = getImage();
  let props = fits.reduce(
    (p, v) => (p[`fit${capf(v)}`] = boolType()) && p,
    Object.create(null)
  );

  props = alignments.reduce(
    (p, v) => (p[`text${capf(v)}`] = boolType()) && p,
    props
  );

  return {
    caption: strType(),
    figure: boolType(),
    ...props
  };
});

const mclass = memoize(props => {
  const bks = boolKeys(props);
  const cls = bks
    .filter(v => v.indexOf('fit') > -1)
    .map(v => 'img' + dashCase(v));

  if (props.figure) {
    bks.filter(v => v.indexOf('text') > -1).forEach(v => cls.push(dashCase(v)));
  }

  return cls;
}, true);

export default {
  name: 'SImg',
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children }) {
    const cls = mclass(props);
    let vm = h(
      'img',
      mergeData(data, {
        staticClass: 'img-responsive',
        class: cls.filter(c => c.indexOf('text-') < 0)
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
                  class: cls.filter(c => c.indexOf('text-') > -1)
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

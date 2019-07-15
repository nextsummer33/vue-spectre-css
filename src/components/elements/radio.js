import { mergeData } from 'vue-functional-data-merge';
import { strType, boolType } from '@/utils/proptypes';
import memoize from '@/utils/memoize';
import { getInput } from '@/utils/get-var';
import { boolKeys } from '@/utils/object';
import { contains } from '@/utils/array';
import Icon from './icon';

const cprops = memoize(() => {
  const { colors, states, sizes } = getInput();
  const props = colors
    .concat(states, sizes)
    .reduce((p, v) => (p[v] = boolType()) && p, Object.create(null));

  return {
    tag: strType('input'),
    iconLeft: strType(),
    iconRight: strType(),
    ...props
  };
});

export default {
  name: 'SInput',
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h) {
    const { colors, sizes } = getInput();
    const icnVm =
      this.iconLeft || this.iconRight
        ? h(Icon, {
            class: ['form-icon'],
            props: { icon: this.iconLeft || this.iconRight }
          })
        : this.loading
        ? h('i', { staticClass: 'form-icon loading' })
        : undefined;

    const cls = [];
    // for (const p in boolKeys(this)) {
    //   if (contains(colors, p)) {
    //     cls.push('is-' + p);
    //   } else if (contains(sizes, p)) {
    //     cls.push('input-' + p);
    //   }
    // }

    // fixed the v-model case, it should send the value into
    // callback instead of event object
    // if (data.model) {
    //   const cb = data.on.input;
    //   data.on.input = ev => cb(ev.target.value);
    // }

    // console.log('------------');
    // console.log(
    //   mergeData(data, {
    //     staticClass: 'form-input',
    //     class: cls
    //   })
    // );
    // console.log('------------');
    let vm = h(
      this.tag,
      {
        staticClass: 'form-input',
        class: cls,
        attrs: {
          ...this.$attrs
        },
        on: this.$listeners
      },
      this.$children
    );

    if (this.iconLeft) {
      vm = h('div', { staticClass: 'has-icon-left' }, [icnVm, vm]);
    } else if (this.iconRight || this.loading) {
      vm = h('div', { staticClass: 'has-icon-right' }, [vm, icnVm]);
    }

    return vm;
  }
};

import Toast from './toast';
import Velocity from 'velocity-animate';

export default {
  inheritAttrs: false,
  data() {
    return {
      hidden: true
    };
  },
  mounted() {
    this.hidden = false;
  },
  methods: {
    onBeforeEnter(el) {
      el.style.opacity = 0;
    },
    onEnter(el, done) {
      Velocity(el, { opacity: 1 }, { complete: done });
    },
    onLeave(el, done) {
      const vm = this;
      Velocity(
        el,
        { opacity: 0 },
        {
          complete() {
            done();
            vm.$destroy(true);
          }
        }
      );
    }
  },
  render(h) {
    const vm = this;
    const toastEl = () => {
      return h(
        Toast,
        {
          attrs: this.$attrs,
          on: {
            clear: ev => {
              vm.hidden = true;
              vm.$listeners.clear && vm.$listeners.clear(ev);
            }
          }
        },
        this.$slots.default
      );
    };

    return h(
      'transition',
      {
        props: {
          name: 'fade',
          duration: '500',
          css: false
        },
        on: {
          beforeEnter: this.onBeforeEnter,
          enter: this.onEnter,
          leave: this.onLeave
        }
      },
      vm.hidden ? undefined : [toastEl()]
    );
  }
};

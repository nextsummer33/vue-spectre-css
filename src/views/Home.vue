<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      size: '5',
      align: 0
    };
  },
  computed: {
    nsize() {
      return parseInt(this.size || 0);
    },
    alignment() {
      return {
        textLeft: this.align === 0,
        textCenter: this.align === 1,
        textRight: this.align === 2
      };
    }
  },
  methods: {}
};
</script>

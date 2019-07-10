<template>
  <div>
    <input type="number" v-model="size" />
    <s-btn>sdfsdfs</s-btn>
    <s-btn-grp :items="['left', 'center', 'right']" v-model="align" />
    <br />
    <br />
    <br />
    <br />
    <s-img
      v-for="(img, i) in nsize"
      :key="i"
      src="https://picturepan2.github.io/spectre/img/osx-yosemite-2.jpg"
      caption="Hello World"
      v-bind="{ ...alignment }"
      figure
    />
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

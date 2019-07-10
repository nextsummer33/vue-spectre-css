<template>
  <div>
    <s-btn v-text="'hello'" />
    <s-btn primary>Hello</s-btn>
    <s-btn link sm></s-btn>
    <s-btn link lg></s-btn>
    <s-btn success />
    <s-btn error />
    <s-btn block />
    <s-btn disabled />
    <s-btn active />
    <s-btn loading />
    <s-btn tag="a" href="/hello" />
    <s-btn icon-right="arrow-up" primary>happy</s-btn>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

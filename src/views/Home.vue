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
    <p>
      <s-btn-grp :items="['item 1', 'item 2', 'item 3']"></s-btn-grp>
      <s-btn-grp :items="['item a', 'item b', 'item c']" v-model="a"></s-btn-grp>
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      oneline: true,
      a: 0
    };
  },
  methods: {
    showmsg() {
      console.log('show');
    }
  }
};
</script>

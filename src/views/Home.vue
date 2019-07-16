<template>
  <s-grid>
    <s-radio label="Male" name="gender" checked />
    <s-checkbox v-model="checked" />
    <s-checkbox value="jack" v-model="checked" />
    <s-checkbox true-value="King" false-value="Queen" v-model="checked" />
    <s-checkbox value="coffee" v-model="checked" />
    {{checked}}
    <s-checkbox id="hello" value="Hello" v-model="mchecked" />
    <s-checkbox id="world" value="World" v-model="mchecked" />
    {{mchecked}}
    <input type="checkbox" v-model="checked" />
    <s-checkbox value="SwitchOn" v-model="checked" switch />
  </s-grid>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      checked: '',
      mchecked: []
    };
  },
  computed: {

  },
  methods: {

  }
};
</script>

<template>
  <s-grid>
    <s-input v-model="v" sm />
    <s-input tag="textarea" v-model="v" sm />
    <s-input tag="textarea" v-model="v" />
    <s-input tag="textarea" v-model="v" lg error />
    <s-input v-model="v" icon-right="arrow-up" />
    <s-input v-model="v" icon-left="arrow-up" />
    <s-input v-model="v" loading />
    <s-select v-model="v2" multiple :items="[{text:'Apple', value: 'apple'}, {text:'Orange', value: 'orange'}]" />
    <s-select v-model="v" :items="[{text:'Apple', value: 'apple'}, {text:'Orange', value: 'orange'}]" />
    <select v-model="selected" multiple @change="test2">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br>
    <span>Selected: {{ selected }}</span>
  </s-grid>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      size: '5',
      align: 0,
      loading: true,
      v: '',
      vs: [],
      v2: [],
      selected: []
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
  methods: {
    test(ev) {
      this.v = ev.target.value;
    },
    test2(ev) {
      console.log(ev);
    }
  }
};
</script>

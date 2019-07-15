<template>
  <s-grid>
    <s-select
      placeholder="Please selecte a value"
      v-model="selected"
      :items="items"
      multiple
    />
    <p>Selected: {{selected}}</p>
    <s-select
      placeholder="Please select a value"
      v-model="v"
      :items="items"
    />
    <span>Selected: {{ selected }}</span>
  </s-grid>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      items: [
        { text: 'One', value: '1' },
        { text: 'Two', value: '2' },
        { text: 'Three', value: '3' },
        { text: 'Four', value: '4' },
        { text: 'Five', value: '5' }
      ],
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

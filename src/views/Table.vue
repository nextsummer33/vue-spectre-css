<template>
  <div>
    <s-table
      striped
      :headers="['column a', 'column b', 'column c', 'column d']"
      :data="tableData"
    />
    <s-table hover>
      <template v-slot:tbody>
        <s-tr active :items="['value a', 'value b', 'value c', 'value d']" />
        <s-tr :items="['value a', 'value b', 'value c', 'value d']" />
      </template>
    </s-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      tableData: [
        ['value a1', 'value b1', 'value b1', 'value c1'],
        ['value a2', 'value b2', 'value b2', 'value c2']
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<template>
  <s-grid>
    <s-row>
      <s-col col="12">
        <s-step :items="items" v-model="step" />
        <s-step>
          <s-step-item tooltip="item 1" :active="step == 0" @click.prevent="step = 0" title="Item 1" />
          <s-step-item tooltip="item 2" :active="step == 1" @click.prevent="step = 1" title="Item 2" />
          <s-step-item tooltip="item 3" :active="step == 2" @click.prevent="step = 2" title="Item 3" />
          <s-step-item tooltip="item 4" :active="step == 3" @click.prevent="step = 3" title="Item 4" />
        </s-step>
      </s-col>
    </s-row>
    <br />
    <s-row>
      <s-col class="text-center">
        <s-btn @click="step--" class="mr-2">Prev</s-btn>
        <s-btn @click="step++">Next</s-btn>
      </s-col>
    </s-row>
  </s-grid>
</template>

<script>
export default {
  data() {
    return {
      step: 0,
      total: 3000,
      items: Object.freeze([
        { text: 'Step 1', tooltip: 'Tooltip 1' },
        { text: 'Step 2', tooltip: 'Tooltip 2' },
        { text: 'Step 3', tooltip: 'Tooltip 3' },
        { text: 'Step 4', tooltip: 'Tooltip 4' }
      ])
    };
  }
};
</script>

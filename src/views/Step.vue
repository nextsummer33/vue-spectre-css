<template>
  <s-grid>
    <s-row>
      <s-col>
        <s-step v-model="step" :items="items" />
      </s-col>
    </s-row>
    <s-row>
      <s-col col="6">
        <s-step>
          <s-step-item tooltip="Hello Word 1">
            Step 1
          </s-step-item>
          <s-step-item tooltip="Hello World 2" active>
            Step 2
          </s-step-item>
          <s-step-item tooltip="Hello World 3">
            Step 3
          </s-step-item>
        </s-step>
      </s-col>
      <s-col col="6">
        <s-step>
          <s-step-item>
            <s-link slot="link" tooltip="Hello World 1">Step 1</s-link>
          </s-step-item>
          <s-step-item active>
            <s-link slot="link" tooltip="Hello World 2">Step 2</s-link>
          </s-step-item>
          <s-step-item>
            <s-link slot="link" tooltip="Hello World 3">Step 2</s-link>
          </s-step-item>
        </s-step>
      </s-col>
    </s-row>
    <s-row>
      <s-col>
        <s-btn @click="step--">Prev</s-btn>
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
      items: [
        { text: 'Step 1', tooltip: 'Tooltip 1' },
        { text: 'Step 2', tooltip: 'Tooltip 2' },
        { text: 'Step 3', tooltip: 'Tooltip 3' }
      ]
    };
  }
};
</script>

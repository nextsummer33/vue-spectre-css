<template>
  <div>
    Home
    <s-grid>
      <s-row oneline>
        <s-col>col</s-col>
        <s-col>col</s-col>
        <s-col col="4">col-6</s-col>
        <s-col col="4">col-6</s-col>
      </s-row>
      <s-row gapless>
        <s-col col="4">col-6</s-col>
        <s-col col="4">col-6</s-col>
      </s-row>
    </s-grid>
    <s-grid grid-xs>
      xs container
    </s-grid>
    <s-grid grid-sm>
      sm container
    </s-grid>
    <s-grid grid-md>
      md container
    </s-grid>
    <s-grid grid-lg>
      lg container
    </s-grid>
    <s-grid grid-xl>
      xl container
    </s-grid>
  </div>
</template>

<script>
export default {
  name: 'home'
};
</script>

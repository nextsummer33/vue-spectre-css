<template>
  <s-grid>
    <s-row>
      <s-col col="3">
        <s-btn tooltip="top tooltip">top tooltip</s-btn>
      </s-col>
      <s-col col="3">
        <s-btn tooltip="right tooltip" tooltipRight>right tooltip</s-btn>
      </s-col>
      <s-col col="3">
        <s-btn tooltip="bottm tooltip" tooltipBottom>bottom tooltip</s-btn>
      </s-col>
      <s-col col="3">
        <s-btn tooltip="left tooltip" tooltipLeft>left tooltip</s-btn>
      </s-col>
    </s-row>
    <s-row>
      <s-col>
        <s-btn :tooltip="'First Line Tooltip Text \n Second Line Tooltip Text'" tooltipRight>
          multiline tooltip
        </s-btn>
      </s-col>
    </s-row>
  </s-grid>
</template>

<script>
export default {
  //
};
</script>

<template>
  <s-grid>
    <s-row>
      <s-col col="6">
        <s-popover right>
          <template v-slot:toggle>
            <s-btn primary>top popover</s-btn>
          </template>
          <template v-slot:container>
            <s-card>
              <s-card-header>
                <s-card-text title class="h5">Apple</s-card-text>
                <s-card-text subtitle>Software & Development</s-card-text>
              </s-card-header>
              <s-card-body>
                To make a contribution to the world by making tools for the mind that advance humankind.
              </s-card-body>
              <s-card-footer>
                <s-btn primary>Buy</s-btn>
              </s-card-footer>
            </s-card>
          </template>
        </s-popover>
      </s-col>
      <s-col col="6">
        <s-popover bottom>
          <s-btn primary>top popover</s-btn>
          <s-popover-container>
            <s-card>
              <s-card-header>
                <s-card-text title class="h5">Apple</s-card-text>
                <s-card-text subtitle>Software & Development</s-card-text>
              </s-card-header>
              <s-card-body>
                To make a contribution to the world by making tools for the mind that advance humankind.
              </s-card-body>
              <s-card-footer>
                <s-btn primary>Buy</s-btn>
              </s-card-footer>
            </s-card>
          </s-popover-container>
        </s-popover>
      </s-col>
    </s-row>
  </s-grid>
</template>

<script>
export default {

}
</script>


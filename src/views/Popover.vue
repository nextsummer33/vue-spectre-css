<template>
  <s-grid>
    <s-row>
      <s-col col="3">
        <s-popover right>
          <s-btn slot="toggle" primary>right popover</s-btn>
          <s-card slot="container">
            <s-card-header>
              <s-card-text title class="h5">Apple</s-card-text>
              <s-card-text subtitle>Software & Development</s-card-text>
            </s-card-header>
            <s-card-body>
              To make a contribution to the world by making tools for the mind
              that advance humankind.
            </s-card-body>
            <s-card-footer>
              <s-btn primary>Buy</s-btn>
            </s-card-footer>
          </s-card>
        </s-popover>
      </s-col>
      <s-col col="3">
        <s-popover top>
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
                To make a contribution to the world by making tools for the mind
                that advance humankind.
              </s-card-body>
              <s-card-footer>
                <s-btn primary>Buy</s-btn>
              </s-card-footer>
            </s-card>
          </template>
        </s-popover>
      </s-col>
      <s-col col="3">
        <s-popover bottom>
          <template v-slot:toggle>
            <s-btn primary>bottom popover</s-btn>
          </template>
          <template v-slot:container>
            <s-card>
              <s-card-header>
                <s-card-text title class="h5">Apple</s-card-text>
                <s-card-text subtitle>Software & Development</s-card-text>
              </s-card-header>
              <s-card-body>
                To make a contribution to the world by making tools for the mind
                that advance humankind.
              </s-card-body>
              <s-card-footer>
                <s-btn primary>Buy</s-btn>
              </s-card-footer>
            </s-card>
          </template>
        </s-popover>
      </s-col>
      <s-col col="3">
        <s-popover left>
          <s-btn primary>left popover</s-btn>
          <s-popover-container>
            <s-card>
              <s-card-header>
                <s-card-text title class="h5">Apple</s-card-text>
                <s-card-text subtitle>Software & Development</s-card-text>
              </s-card-header>
              <s-card-body>
                To make a contribution to the world by making tools for the mind
                that advance humankind.
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
export default {};
</script>

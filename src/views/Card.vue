<template>
  <s-grid>
    <s-row>
      <s-col col="6">
        <s-card>
          <s-card-img
            src="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg"
          />
          <s-card-header>
            <s-card-text class="h5" title>Microsoft</s-card-text>
            <s-card-text subtitle class="text-gray"
              >Software and Development</s-card-text
            >
          </s-card-header>
          <s-card-body>
            Empower every person and every organization on the planet to achieve
            more.
          </s-card-body>
          <s-card-footer>
            <s-btn primary>Do</s-btn>
          </s-card-footer>
        </s-card>
      </s-col>
      <s-col col="6">
        <s-card>
          <s-card-header>
            <s-card-text class="h5" title>Apple</s-card-text>
            <s-card-text subtitle class="text-gray"
              >Hardware and software</s-card-text
            >
          </s-card-header>
          <s-card-img
            src="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg"
          />
          <s-card-body>
            To make a contribution to the world by making tools for the mind
            that advance humankind
          </s-card-body>
          <s-card-footer>
            <s-btn-grp block>
              <s-btn primary>Buy</s-btn>
              <s-btn>Buy</s-btn>
              <s-btn>Buy</s-btn>
            </s-btn-grp>
          </s-card-footer>
        </s-card>
      </s-col>
    </s-row>

    <s-row>
      <s-col col="6">
        <s-card layout="header,body,img,footer">
          <template v-slot:header>
            <s-card-text class="h5">Hello World</s-card-text>
            <s-card-text class="text-gray" subtitle>Subtitle</s-card-text>
          </template>
          <template v-slot:body>
            Empower every person and every organization on the planet to achieve
            more.
          </template>
          <template v-slot:footer>
            <s-btn>Join</s-btn>
          </template>
          <template v-slot:img>
            <s-img
              src="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg"
            />
          </template>
        </s-card>
      </s-col>
    </s-row>
  </s-grid>
</template>

<script>
export default {};
</script>

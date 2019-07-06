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
    <s-grid md>
      <s-nvb>
        <template v-slot:left>
          <s-nvb-brand
            v-show="show"
            href="hello"
            v-text="show ? 'spectre.css' : ''"
          ></s-nvb-brand>
        </template>
        <template v-slot:center
          >yoyo</template
        >
        <template v-slot:right>
          <div class="input-group input-inline">
            <input class="form-input" type="text" placeholder="search" />
            <button class="btn btn-primary input-group-btn">Search</button>
          </div>
        </template>
      </s-nvb>
      <s-nvb>
        <s-nvb-item>
          <p>this is a customize template</p>
        </s-nvb-item>
      </s-nvb>
    </s-grid>
    <button @click="show = !show" v-text="show ? 'hide' : 'show'"></button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      show: false
    };
  }
};
</script>

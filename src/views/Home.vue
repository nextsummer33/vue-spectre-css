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
      <s-navbar>
        <template v-slot:left>
          <a href="" class="navbar-brand">Spectre.css</a>
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
      </s-navbar>
      <s-navbar>
        <s-navbar-item>
          <p>this is a customize template</p>
        </s-navbar-item>
      </s-navbar>
    </s-grid>
  </div>
</template>

<script>
export default {
  name: 'home'
};
</script>

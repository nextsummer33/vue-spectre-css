<template>
  <s-grid>
    <h2>Navbar</h2>
    <s-nvb>
      <s-nvb-item>
        <s-nvb-brand herf="/">Spectre.css</s-nvb-brand>
        <s-btn link>Docs</s-btn>
        <s-btn link>GitHub</s-btn>
      </s-nvb-item>
      <s-nvb-item>
        <s-input-grp inline>
          <s-input type="text" placeholder="Search" />
          <s-btn primary input-grp>Search</s-btn>
        </s-input-grp>
      </s-nvb-item>
    </s-nvb>
    <h2>Customize Template</h2>
    <s-nvb>
      <template v-slot:left="">
        <s-btn tag="a" href="#" link>Docs</s-btn>
        <s-btn tag="a" href="#" link>Examples</s-btn>
      </template>
      <template v-slot:center>
        <s-img
          src="https://picturepan2.github.io/spectre/img/spectre-logo.svg"
        />
      </template>
      <template v-slot:right>
        <s-btn tag="a" href="#" link>Twitter</s-btn>
        <s-btn tag="a" href="#" link>GitHub</s-btn>
      </template>
    </s-nvb>
  </s-grid>
</template>

<script>
export default {};
</script>

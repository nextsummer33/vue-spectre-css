<template>
  <s-grid>
    <s-row>
      <s-col col="6">
        <s-nav>
          <s-nav-item to="#element">Element</s-nav-item>
          <s-nav-item to="#layout">Layout</s-nav-item>
          <s-nav-item to="#components" active>
            Components
            <s-nav slot="children">
              <s-nav-item>NavBar</s-nav-item>
              <s-nav-item>Bar</s-nav-item>
              <s-nav-item>Modal</s-nav-item>
              <s-nav-item>Tile</s-nav-item>
            </s-nav>
          </s-nav-item>
        </s-nav>
      </s-col>
      <s-col col="6">

      </s-col>
    </s-row>
  </s-grid>
</template>

<script>
export default {

}
</script>


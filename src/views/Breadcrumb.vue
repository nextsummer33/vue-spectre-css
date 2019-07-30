<template>
  <s-grid>
    <s-row>
      <s-col col="6">
        <s-breadcrumb :items="items" router />
      </s-col>
      <s-col col="6">
        <s-breadcrumb>
          <s-breadcrumb-item to="#" text="Home" />
          <s-breadcrumb-item to="#" text="Settings" />
          <s-breadcrumb-item
            prefix="Search Result: "
            to="#"
            text="Spectre CSS"
          />
        </s-breadcrumb>
      </s-col>
    </s-row>
    <s-row>
      <s-col col="6">
        <s-breadcrumb>
          <s-breadcrumb-item href="#hello">
            Hello
          </s-breadcrumb-item>
          <s-breadcrumb-item href="#world">
            World
          </s-breadcrumb-item>
        </s-breadcrumb>
      </s-col>
      <s-col col="6"> </s-col>
    </s-row>
  </s-grid>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: 'Home', to: '/home' },
        { text: 'Settings', to: '/settings' },
        { text: 'Change avatar', to: '/changeavatar' }
      ]
    };
  }
};
</script>

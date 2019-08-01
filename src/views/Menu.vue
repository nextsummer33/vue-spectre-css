<template>
  <s-grid>
    <s-row>
      <s-col col="4">
        <s-menu>
          <s-menu-item content="LINKS" divider />
          <s-menu-item title="Slack" to="#slack" active />
          <s-menu-item title="Hipchat" to="#hipchat" />
          <s-menu-item title="Skype" to="#skype" />
        </s-menu>
      </s-col>
      <s-col col="4">
        <s-menu>
          <s-menu-item>
            <s-tile centered>
              <s-tile-icon src="https://picturepan2.github.io/spectre/img/avatar-4.png" avatar />
              <s-tile-content title="Steve Rogers" />
            </s-tile>
          </s-menu-item>
          <s-menu-item divider />
          <s-menu-item title="My Profile">
            <template #badge>
              <s-checkbox label="Public" />
            </template>
          </s-menu-item>
          <s-menu-item badge="2" title="Settings" />
        </s-menu>
      </s-col>
      <s-col col="4">
        <s-menu>
          <s-menu-item>
            <s-checkbox label="form-checkbox" />
          </s-menu-item>
          <s-menu-item>
            <s-radio label="form-radio" />
          </s-menu-item>
          <s-menu-item>
            <s-checkbox switch label="form-switch" />
          </s-menu-item>
        </s-menu>
      </s-col>
      <s-col col="4">
        <s-menu>
          <s-menu-item badge="2">
            <template #content>
              <s-link>Customize By Slot</s-link>
            </template>
          </s-menu-item>
          <s-menu-item>
            <s-link>Default Slot</s-link>
            sdfsdkfjdsklfjsdlk
          </s-menu-item>
          <s-menu-item title="Slack" to="#slack" />
          <s-menu-item title="Hipchat" to="#hipchat" />
          <s-menu-item title="Skype" to="#skype" />
        </s-menu>
      </s-col>
    </s-row>
  </s-grid>
</template>

<script>
export default {
  methods: {
    say() {
      alert('hi');
    }
  }
};
</script>

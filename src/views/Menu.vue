<template>
  <s-grid>
    <s-row>
      <s-col mdCol="6" smCol="6">
        <s-menu>
          <s-menu-item title="LINKS" divider />
          <s-menu-item title="Slack" @click.prevent="say" badge="2" />
          <s-menu-item title="Hipchat" @click.prevent="say" />
          <s-menu-item title="Skype"  @click.prevent="say" badge="Awesome" />
        </s-menu>
      </s-col>
      <s-col mdCol="6" smCol="6">
        <s-menu>
          <s-menu-item title="Profile">
            <template #badge>
              <s-avatar src="https://picturepan2.github.io/spectre/img/avatar-4.png" />
            </template>
          </s-menu-item>
          <s-menu-item divider />
          <s-menu-item title="Hello">
            <template #badge>
              <s-checkbox label="Show all" />
            </template>
          </s-menu-item>
          <s-menu-item title="World" />
          <s-menu-item title="profile" badge="4"/>
        </s-menu>
      </s-col>
      <s-col mdCol="6" smCol="6">
        <div>
          <s-dropdown>
            <s-dropdown-toggle title="Dropdown" />
            <s-menu>
              <s-menu-item title="World" />
              <s-menu-item title="profile" badge="4"/>
            </s-menu>
          </s-dropdown>
        </div>
        <div>
          <s-dropdown>
            <s-dropdown-toggle btn-grp title="Dropdown">
              <s-menu>
                <s-menu-item title="World" />
                <s-menu-item title="profile" badge="4"/>
                <s-menu-item divider title="Inputs" />
                <s-menu-item>
                  <s-checkbox label="form-checkbox" />
                </s-menu-item>
                <s-menu-item>
                  <s-checkbox label="form-switch" switch />
                </s-menu-item>
                <s-menu-item>
                  <s-radio label="form-radio" />
                </s-menu-item>
              </s-menu>
            </s-dropdown-toggle>
          </s-dropdown>
        </div>
        <div>
          <s-dropdown title="Dropdown" primary>
            <template #menu>
              <s-menu>
                <s-menu-item title="Option 1" />
                <s-menu-item>
                  <s-radio label="form-radio" />
                </s-menu-item>
              </s-menu>
            </template>
          </s-dropdown>
        </div>

      </s-col>
      <s-col mdCol="6" smCol="6">
        <s-menu>
          <s-menu-item>
            <s-checkbox label="form-checkbox" />
            <s-checkbox label="form-switch" switch />
            <s-radio label="form-radio" />
          </s-menu-item>
        </s-menu>
      </s-col>
    </s-row>
  </s-grid>
</template>

<script>
export default {
  methods: {
    say() {
      console.log('hi');
    }
  },
  data: () => ({
    v: '0'
  })
};
</script>

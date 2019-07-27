<template>
  <s-grid>
    <s-row>
      <s-col col="6">
        <s-panel>
          <s-panel-header class="text-center">
            <s-avatar lg src="https://picturepan2.github.io/spectre/img/avatar-2.png" />
            <div class="h5">Bruce Banner</div>
            <div>THE HULK</div>
          </s-panel-header>
          <s-panel-nav>
            <s-tab block :items="[{tab:'Profile'}, {tab: 'Files'}, {tab: 'Tasks'}]" />
          </s-panel-nav>
          <s-panel-body class="profile">
            <s-tile centered>
              <s-tile-content title="Email" subtitle="bruce.banner@hulk.com" />
              <s-tile-action>
                <s-btn iconLeft="edit" link />
              </s-tile-action>
            </s-tile>
            <s-tile centered>
              <s-tile-content title="Email" subtitle="bruce.banner@hulk.com" />
              <s-tile-action>
                <s-btn iconLeft="edit" link />
              </s-tile-action>
            </s-tile>
            <s-tile centered>
              <s-tile-content title="Email" subtitle="bruce.banner@hulk.com" />
              <s-tile-action>
                <s-btn iconLeft="edit" link />
              </s-tile-action>
            </s-tile>
          </s-panel-body>
          <s-panel-footer>
            <s-btn block primary>save</s-btn>
          </s-panel-footer>
        </s-panel>
      </s-col>
    </s-row>
  </s-grid>
</template>

<style scoped>
  .profile .tile-content {
    margin: .5em 0;
  }
</style>


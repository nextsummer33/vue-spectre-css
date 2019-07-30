<template>
  <s-grid>
    <s-row>
      <s-col col="6">
        <s-panel>
          <s-panel-header class="text-center">
            <s-avatar
              lg
              src="https://picturepan2.github.io/spectre/img/avatar-2.png"
            />
            <div class="h5">Bruce Banner</div>
            <div>THE HULK</div>
          </s-panel-header>
          <s-panel-nav>
            <s-tab
              block
              :items="[{ tab: 'Profile' }, { tab: 'Files' }, { tab: 'Tasks' }]"
            />
          </s-panel-nav>
          <s-panel-body class="profile">
            <s-tile centered>
              <s-tile-content title="Email" subtitle="bruce.banner@hulk.com" />
              <s-tile-action>
                <s-btn icon="edit" link />
              </s-tile-action>
            </s-tile>
            <s-tile centered>
              <s-tile-content title="Email" subtitle="bruce.banner@hulk.com" />
              <s-tile-action>
                <s-btn icon="edit" link />
              </s-tile-action>
            </s-tile>
            <s-tile centered>
              <s-tile-content title="Email" subtitle="bruce.banner@hulk.com" />
              <s-tile-action>
                <s-btn icon="edit" link />
              </s-tile-action>
            </s-tile>
          </s-panel-body>
          <s-panel-footer>
            <s-btn block primary>save</s-btn>
          </s-panel-footer>
        </s-panel>
      </s-col>

      <s-col col="6">
        <s-panel>
          <s-panel-header title="comments" />
          <s-panel-body style="height:400px;overflow-y:scroll;">
            <s-tile>
              <s-tile-icon
                src="https://picturepan2.github.io/spectre/img/avatar-1.png"
                avatar
              />
              <s-tile-content>
                <s-tile-text title tag="strong">Thor Odinson</s-tile-text>
                <s-tile-text subtitle
                  >Earth's Mightiest Heroes joined forces to take on threats
                  that were too big for any one hero to tackle...</s-tile-text
                >
              </s-tile-content>
              <s-tile-action>
                <s-btn icon="check" link />
              </s-tile-action>
            </s-tile>
            <s-tile>
              <s-tile-icon
                src="https://picturepan2.github.io/spectre/img/avatar-1.png"
                avatar
              />
              <s-tile-content>
                <s-tile-text title tag="strong">Thor Odinson</s-tile-text>
                <s-tile-text subtitle
                  >Earth's Mightiest Heroes joined forces to take on threats
                  that were too big for any one hero to tackle...</s-tile-text
                >
              </s-tile-content>
              <s-tile-action></s-tile-action>
            </s-tile>
            <s-tile>
              <s-tile-icon
                src="https://picturepan2.github.io/spectre/img/avatar-1.png"
                avatar
              />
              <s-tile-content>
                <s-tile-text title tag="strong">Thor Odinson</s-tile-text>
                <s-tile-text subtitle
                  >Earth's Mightiest Heroes joined forces to take on threats
                  that were too big for any one hero to tackle...</s-tile-text
                >
              </s-tile-content>
              <s-tile-action></s-tile-action>
            </s-tile>
            <s-tile>
              <s-tile-icon
                src="https://picturepan2.github.io/spectre/img/avatar-1.png"
                avatar
              />
              <s-tile-content>
                <s-tile-text title tag="strong">Thor Odinson</s-tile-text>
                <s-tile-text subtitle
                  >Earth's Mightiest Heroes joined forces to take on threats
                  that were too big for any one hero to tackle...</s-tile-text
                >
              </s-tile-content>
              <s-tile-action></s-tile-action>
            </s-tile>
            <s-tile>
              <s-tile-icon
                src="https://picturepan2.github.io/spectre/img/avatar-1.png"
                avatar
              />
              <s-tile-content>
                <s-tile-text title tag="strong">Thor Odinson</s-tile-text>
                <s-tile-text subtitle
                  >Earth's Mightiest Heroes joined forces to take on threats
                  that were too big for any one hero to tackle...</s-tile-text
                >
              </s-tile-content>
              <s-tile-action></s-tile-action>
            </s-tile>
            <s-tile>
              <s-tile-icon
                src="https://picturepan2.github.io/spectre/img/avatar-1.png"
                avatar
              />
              <s-tile-content>
                <s-tile-text title tag="strong">Thor Odinson</s-tile-text>
                <s-tile-text subtitle
                  >Earth's Mightiest Heroes joined forces to take on threats
                  that were too big for any one hero to tackle...</s-tile-text
                >
              </s-tile-content>
              <s-tile-action></s-tile-action>
            </s-tile>
          </s-panel-body>
          <s-panel-footer>
            <s-input-grp>
              <s-input placeholder="leave your comment" />
              <s-btn primary input-grp>Send</s-btn>
            </s-input-grp>
          </s-panel-footer>
        </s-panel>
      </s-col>
    </s-row>
  </s-grid>
</template>

<style scoped>
.profile .tile-content {
  margin: 0.5em 0;
}

.panel {
  min-height: 600px;
}
</style>

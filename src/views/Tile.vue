<template>
  <s-grid>
    <s-row>
      <s-col col="5">
        <s-tile>
          <s-tile-icon avatar src="https://picturepan2.github.io/spectre/img/avatar-3.png" presence="online" />
          <s-tile-content v-bind="msg1" />
          <s-tile-action>
            <s-btn primary class="mr-2">Join</s-btn>
            <s-btn>Contact</s-btn>
          </s-tile-action>
        </s-tile>
        <s-tile>
          <s-tile-icon avatar src="https://picturepan2.github.io/spectre/img/avatar-3.png" presence="online" />
          <s-tile-content>
            <s-tile-text tag="strong" title v-text="'The avengers'" />
            <s-tile-text tag="div" subtitle class="mb-1" v-text="'Earth\'s Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle'" />
            <p>
              <s-btn primary class="mr-2" sm>Join</s-btn>
              <s-btn sm>Contact</s-btn>
            </p>
          </s-tile-content>
        </s-tile>

        <s-tile centered>
          <s-tile-icon icon="check" centered />
          <s-tile-content>
            <s-tile-text tag="div" title>spectre-docs.pdf</s-tile-text>
            <s-tile-text class="text-gray" tag="small" subtitle>14MB · Public · 1 Jan, 2017</s-tile-text>
          </s-tile-content>
          <s-tile-action>
            <s-btn iconLeft="more-vert" link></s-btn>
          </s-tile-action>
        </s-tile>

        <s-tile>
          <template v-slot:icon>
            <s-avatar initial="YZ" presence="busy" />
          </template>
          <template v-slot:content>
            <div>Hello World</div>
            <div>sdfsdfsfs</div>
          </template>
          <template v-slot:action>
            <s-btn primary>Join</s-btn>
            <s-btn link>Me</s-btn>
          </template>
        </s-tile>

      </s-col>
    </s-row>

  </s-grid>
</template>

<script>
export default {
  data() {
    return {
      msg1: {
        title: 'The avengers',
        subtitle: 'Earth\'s Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle'
      }
    }
  }
}
</script>


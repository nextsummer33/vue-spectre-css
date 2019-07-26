<template>
  <s-grid>
    <s-tab>
      <s-tab-item active>Music</s-tab-item>
      <s-tab-item>Playlist</s-tab-item>
    </s-tab>

    <s-tab>
      <s-tab-item href="#music" active badge>
        Active
        <s-btn tag="span" clear />
      </s-tab-item>
      <s-tab-item badge="2">Playlist</s-tab-item>
      <s-tab-item action>
        <s-input-grp inline>
          <s-input sm />
          <s-btn sm primary input-grp>Search</s-btn>
        </s-input-grp>
      </s-tab-item>
    </s-tab>
    <s-tab :items="items" v-model="tabIndex" />
    <s-tab :items="items" @select="tabIndex = $event" />
    <s-tab block :items="items" @select="tabIndex = $event" />
    <div id="basketball" v-show="tabIndex == 0">basketball</div>
    <div id="football" v-show="tabIndex == 1">football</div>
    <div id="badminton" v-show="tabIndex == 2">Badminton</div>
  </s-grid>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
      items: [
        { tab: 'Baseketball', badge: '2' },
        { tab: 'Football' },
        { tab: 'Badminton' }
      ]
    };
  }
};
</script>

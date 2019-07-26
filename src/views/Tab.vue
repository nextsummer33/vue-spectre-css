<template>
  <s-grid>
    <s-tab>
      <s-tab-item active>Music</s-tab-item>
      <s-tab-item>Playlist</s-tab-item>
    </s-tab>

    <s-tab block>
      <s-tab-item href="#music" active badge>Music</s-tab-item>
      <s-tab-item badge="2">Playlist</s-tab-item>
    </s-tab>
    <s-tab :items="items" v-model="tabIndex"/>
    <s-tab :items="items" @select="tabIndex = $event"/>
    <div id="basketball" v-show="tabIndex == 0">basketball</div>
    <div id="football" v-show="tabIndex == 1">badminton</div>
    <div id="badminton" v-show="tabIndex == 2">Badminton</div>
  </s-grid>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
      items: [
        { tab: 'Baseketball' , badge: '2'},
        { tab: 'Football' },
        { tab: 'Badminton' },
      ]
    }
  }
}
</script>

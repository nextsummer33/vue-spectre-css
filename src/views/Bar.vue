<template>
  <s-grid>
    <s-row>
      <s-col col="12">
        <div class="bar">
          <s-bar-item value="25" bgColor="#eeff00" />
          <s-bar-item value="15" bgColor="#00ffee" />
          <s-bar-item value="10" bgColor="#00ff00" />
          <s-bar-item value="15" bgColor="#ff00ee" />
        </div>
        <s-bar><s-bar-item value="50" /></s-bar>
        <s-bar><s-bar-item value="100" /></s-bar>
        <s-bar><s-bar-item value="50" notip /></s-bar>
        <s-bar><s-bar-item value="60" nolabel /></s-bar>
        <s-bar slider><s-bar-item v-model="v" slider /></s-bar>
        <div>{{v}}</div>
        <s-bar range slider v-model="v2" />
        <div>{{v2}}</div>
        <s-bar value="50" lg />

        <s-input v-model="v2[0]" />
        <s-input v-model="v2[1]" />
      </s-col>
    </s-row>
  </s-grid>
</template>

<script>
export default {
  data: () => ({
    v: 0,
    v2: ['0', '100']
  })
}
</script>


<template>
  <s-grid>
    <s-row>
      <s-col col="4">
        <s-btn @click="show = true">Show modal</s-btn>
        <s-modal v-model="show">
          <s-modal-header class="h5" title="Model-title" @dismiss="show = false" />
          <s-modal-body>
            Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple pie carrot cake chocolate cake caramels.
          </s-modal-body>
          <s-modal-footer>
            <s-btn>Save</s-btn>
          </s-modal-footer>
        </s-modal>
      </s-col>
      <s-col col="4">
        <s-btn @click="show2 = true">Show sm modal</s-btn>
        <s-modal v-model="show2" sm>
          <s-modal-header class="h5" title="Model-title" @dismiss="show2 = false" />
          <s-modal-body>
            Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple pie carrot cake chocolate cake caramels.
          </s-modal-body>
          <s-modal-footer>
            <s-btn>Save</s-btn>
          </s-modal-footer>
        </s-modal>
      </s-col>
      <s-col col="4">
        <s-btn @click="show3 = true">Show lg modal</s-btn>
        <s-modal v-model="show3" lg persistent>
          <s-modal-header @dismiss="show3 = false">
            <s-modal-title class="h5">Hello World</s-modal-title>
          </s-modal-header>
          <s-modal-body>
            Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple pie carrot cake chocolate cake caramels.
          </s-modal-body>
          <s-modal-footer>
            <s-btn>Save</s-btn>
          </s-modal-footer>
        </s-modal>
      </s-col>
    </s-row>
  </s-grid>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
      show3: false
    }
  }
}
</script>

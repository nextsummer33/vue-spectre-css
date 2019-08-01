<template>
  <s-grid>
    <s-row>
      <s-col col="12">
        <s-empty>
          <s-empty-icon icon="people" />
          <s-empty-text class="h5">You have no new messages</s-empty-text>
          <s-empty-text subtitle
            >Click the button to start a conversation</s-empty-text
          >
          <s-empty-action>
            <s-btn primary>Send a message</s-btn>
          </s-empty-action>
        </s-empty>
      </s-col>
    </s-row>
  </s-grid>
</template>

<script>
export default {};
</script>

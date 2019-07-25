<template>
  <s-grid>
    <s-row>
      <s-col>
        <s-chip>Crime</s-chip>
        <s-chip @click="sayHi" clear>Drama</s-chip>
        <s-chip>Biography</s-chip>
        <s-chip>Mystery</s-chip>
      </s-col>
    </s-row>
    <s-row>
      <s-col>
        <s-chip initial="TS">Tony Stark</s-chip>
        <s-chip src="https://picturepan2.github.io/spectre/img/avatar-1.png"
          >Thor Odinson</s-chip
        >
        <s-chip initial="YZ" clear></s-chip>
        <s-chip
          src="https://picturepan2.github.io/spectre/img/avatar-1.png"
          clear
          @click="sayHi"
        />
      </s-col>
    </s-row>
  </s-grid>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    sayHi() {
      console.log('hello');
    }
  }
};
</script>

<template>
  <div id="app">
    <mynav />
    <router-view />
  </div>
</template>

<script>
import Nav from './Nav.vue';
export default {
  components: {
    mynav: Nav
  }
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

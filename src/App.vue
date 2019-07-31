<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/form">Form</router-link> |
      <router-link to="/table">Tables</router-link> |
      <router-link to="/navbar">Navbar</router-link> |
      <router-link to="/tile">Tile</router-link> |
      <router-link to="/avatar">Avatar</router-link> |
      <router-link to="/chip">Chip</router-link> |
      <router-link to="/toast">Toast</router-link> |
      <router-link to="/tab">Tab</router-link> |
      <router-link to="/card">Card</router-link> |
      <router-link to="/panel">Panel</router-link> |
      <router-link to="/tooltip">Tooltip</router-link> |
      <router-link to="/breadcrumb">Breadcrumb</router-link> |
      <router-link to="/popover">Popover</router-link> |
      <router-link to="/step">Step</router-link> |
      <router-link to="/nav">Nav</router-link> |
    </div>
    <router-view />
  </div>
</template>

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

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
@import './style/base.scss';
html{
  height: 100%;
}

body {
    height: 100%;
    overflow: hidden;
}
#app {
    height: 100%;
}

</style>

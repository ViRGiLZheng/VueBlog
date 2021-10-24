<template>
    <div class="ms-doc">
        <h1>Hello,world  </h1>
        <h2>{{artpath}}</h2>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    artpath: function() {
      return this.$route.fullPath;
    }
  }
};
</script>




<style lang="scss">
.ms-doc {
  width: 100%;
  max-width: 980px;
  font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
  color: #2d2f33;
}
</style>



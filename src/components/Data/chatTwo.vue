<template>
  <div>
    <img v-bind:src="url" alt="id" width="250px" height="250px">
  </div>
</template>

<script>
export default {
  name: "chatTwo",
  props: {
    url: String
  }
};
</script>

<style scoped>
</style>


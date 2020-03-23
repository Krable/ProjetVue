<template>
  <div>
    <a href="#!" class="collection-item">{{ name }}</a>
    <div class="progress">
      <div class="determinate" v-bind:style="{ width: pourcentage+'%' }" style></div>
      <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySkill",
  props: {
    name: String,
    pourcentage: Number
  }
};
</script>

<style scoped>
</style>


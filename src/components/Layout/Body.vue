<template>
  <div class="container">
    <div class="row">
      <div class="col s4">Test1</div>
      <div class="col s4">Test2</div>
      <div class="col s4">Test3</div>
    </div>
    <MySkills/>
  </div>
</template>

<script>
import MySkills from "../Data/MySkills";

export default {
  name: "BodyPortFolio",
  props: {},
  components: {
    MySkills
  }
};
</script>

<style scoped>
</style>


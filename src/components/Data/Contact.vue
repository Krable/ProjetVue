<template>
  <div class="row">
    <div class="input-field col s6">
      <input value id="first_name2" type="text" class="validate" v-model="inputData">
      <label class="active" for="first_name2">{{ inputData }}</label>
      <input type="submit" value="valider">
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    inputData: String
  }
};
</script>

<style scoped>
</style>


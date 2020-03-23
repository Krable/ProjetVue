<template>
  <div class="row">
    <h2>jwt :{{ userJwt }}</h2>
    <chatOne v-bind:url="chat" />
  </div>
</template>

<script>
import chatOne from "../Data/chatOne";

import "es6-promise/auto";

export default {
  name: "SecondPage",
  props: {},
  components: {
    chatOne
  },
  computed: {
    chat() {
      return this.$store.state.url;
    },
    userJwt() {
      return this.$store.state.jwt;
    }
  }
};
</script>

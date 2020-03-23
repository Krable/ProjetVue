<template>
  <header>
    <nav>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo right">Lucas LEMOINE et Mickael DONOSO</a>
        <ul class="left">
          <li>
            <router-link to="/SecondPage">Hi</router-link>
          </li>
          <li class="active">
            <router-link to="/Login">Login</router-link>
          </li>
          <li class="active">
            <router-link to="/Register">Register</router-link>
          </li>

          <li class="active">
            <router-link to="/AllArticle">AllArticle</router-link>
          </li>
          <li class="active" v-if="jwt">
            <router-link to="/MyArticle">MyArticle</router-link>
          </li>
          <li class="active" v-if="jwt">
            <router-link to="/AddArticle">AddArticle</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderPortFolio",
  props: {},
  computed: {
    jwt() {
      return this.$store.state.jwt;
    }
  }
};
</script>

<style scoped>
</style>


<template>
  <div class="container">
    <h3>My Article</h3>

    <div v-if="isLoading" class="progress">
      <div class="indeterminate"></div>
    </div>

    <PageArticle
      v-else
      v-for="article in articles"
      v-bind:key="article._id"
      v-bind:titre="article.titre"
      v-bind:contenu="article.contenu"
      v-bind:auteur="article.auteur[0].nomUser + ' ' + article.auteur[0].prenomUser"
      v-bind:idArticle="article._id"
    ></PageArticle>
  </div>
</template>

<script>
import PageArticle from "../newData/Article";
import Axios from "axios";
import "es6-promise/auto";

/*
const headers = {
  "Content-Type": "application/json",
  Authorization: "JWT "
};
*/

export default {
  name: "PageMyArticle",
  props: {},
  components: {
    PageArticle
  },
  data() {
    return {
      isLoading: true
    };
  },
  computed: {
    articles() {
      return this.$store.state.myArticles;
    }
  },
  mounted() {
    Axios.get("http://127.0.0.1:5000/getAllArticlesByUser", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + this.$store.state.jwt
      }
    })
      .then(response => {
        let data = response.data;
        this.isLoading = false;
        this.$store.commit("setMyArticles", data);
      })
      .catch(error => console.log(error));
  }
};
</script>
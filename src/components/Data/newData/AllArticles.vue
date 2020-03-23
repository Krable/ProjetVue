<template>
  <div class="container">
    <h3>All Article</h3>

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
    />
  </div>
</template>

<script>
import PageArticle from "../newData/Article";
import Axios from "axios";
import "es6-promise/auto";

const headers = {
  "Content-Type": "application/json"
};

export default {
  name: "PageAllArticle",
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
      return this.$store.state.articles;
    }
  },
  mounted() {
    Axios.get("http://127.0.0.1:5000/getAllArticles", {
      headers: headers
    })
      .then(response => {
        let data = response.data;
        console.log(data);
        this.isLoading = false;
        this.$store.commit("setArticles", data);
      })
      .catch(error => console.log(error));
  }
};
</script>
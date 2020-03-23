<template>
  <div class="container">
    <h3>Voulez vous supprimer cette article ? - {{idArticle}}</h3>
    <form id="formRemoveArticle" @submit="checkForm" method="post" class="text-center">
      <div v-if="errors.length">
        <div
          v-for="error in errors"
          v-bind:key="error"
          class="alert alert-danger"
          role="alert"
          style="color: red"
        >{{ error }}</div>
      </div>
      <button type="submit" class="btn btn-outline-danger">OUI</button>
    </form>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "PageRemoveArticle",
  props: {},
  computed: {
    idArticle() {
      return this.$route.params.idArticle;
    }
  },
  data() {
    return {
      errors: []
    };
  },
  methods: {
    checkForm: function(e) {
      let apiUrl = "http://127.0.0.1:5000/dropArticle/"; //"https://deploiementheroku.herokuapp.com/login";

      Axios.get(apiUrl + this.idArticle + 444151, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "JWT " + this.$store.state.jwt
        }
      })
        .then(response => {
          if (response.status == 200) {
            this.$router.push("/MyArticle");
          } else {
            this.errors.push(
              "Une erreur est survenue lors de la suppression de l'article"
            );
          }
        })
        .catch(error => {
          console.log(error);
          this.errors.push(
            "Vous devez vous connecter pour supprimer un article"
          );
        });

      this.errors = [];

      e.preventDefault();
    }
  }
};
</script>

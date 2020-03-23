<template>
  <div class="container">
    <h3>Add</h3>

    <div class="row">
      <form id="formAddArticle" @submit="checkForm" method="post" class="col s12">
        <div
          v-for="error in errors"
          v-bind:key="error"
          class="alert alert-danger"
          role="alert"
          style="color: red"
        >{{ error }}</div>

        <div class="row">
          <div class="input-field col s6">
            <input id="titre" v-model="titre" type="text" class="validate" />
            <label for="titre">Titre</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <textarea id="contenu" v-model="contenu" class="materialize-textarea"></textarea>
            <label for="contenu">Textarea</label>
          </div>
        </div>

        <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
      </form>
    </div>
  </div>
</template>


<script>
import Axios from "axios";

export default {
  name: "PageAddArticle",
  props: {},
  data() {
    return {
      errors: [],
      titre: null,
      contenu: null
    };
  },
  methods: {
    checkForm: function(e) {
      if (this.titre && this.contenu) {
        let apiUrl = "http://127.0.0.1:5000/addArticle"; //"https://deploiementheroku.herokuapp.com/login";

        let data = {
          titre: this.titre,
          contenu: this.contenu
        };

        Axios.post(apiUrl, data, {
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
                "Une erreur est survenue lors de la création de l'article."
              );
            }
          })
          .catch(error => {
            console.log(error);
            this.errors.push("Vous devez vous connecter pour créer un article");
          });

        // return true;
      }

      this.errors = [];

      if (!this.titre) {
        this.errors.push("Email required.");
      }
      if (!this.contenu) {
        this.errors.push("Password required.");
      }

      e.preventDefault();
    }
  }
};
</script>

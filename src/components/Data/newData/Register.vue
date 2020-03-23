<template>
  <div class="row">
    <form class="form-horizontal text-center" id="formCheckLogin" @submit="checkForm" method="post">
      <div v-if="errors.length">
        <div
          v-for="error in errors"
          v-bind:key="error"
          class="alert alert-danger"
          role="alert"
          style="color: red"
        >{{ error }}</div>
      </div>

      <div v-if="success.length">
        <div
          v-for="succes in success"
          v-bind:key="succes"
          class="alert alert-success"
          role="alert"
          style="color: green"
        >{{ succes }}</div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="nom" v-model="nom" type="text" class="validate" />
          <label for="nom">Nom</label>
        </div>
        <div class="input-field col s6">
          <input id="prenom" v-model="prenom" type="text" class="validate" />
          <label for="prenom">Prenom</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" v-model="email" type="email" class="validate" />
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" v-model="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="passwordConfirm" v-model="passwordConfirm" type="password" class="validate" />
          <label for="passwordConfirm">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="row">
          <button class="btn waves-effect waves-light col s12" type="submit" name="action">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "PageRegister",
  props: {},
  data() {
    return {
      errors: [],
      success: [],
      nom: null,
      prenom: null,
      email: null,
      password: null,
      passwordConfirm: null
    };
  },
  methods: {
    checkForm: function(e) {
      if (
        this.nom &&
        this.prenom &&
        this.email &&
        this.password &&
        this.passwordConfirm &&
        this.password == this.passwordConfirm
      ) {
        let apiUrl = "http://127.0.0.1:5000/addUser"; //"https://deploiementheroku.herokuapp.com/addUser";

        let data = {
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
          password: this.password
        };
        const headers = {
          "Content-Type": "application/json"
          //'Authorization': 'JWT fefege...'
        };
        Axios.post(apiUrl, data, {
          headers: headers
        })
          .then(response => {
            if (response.status == 200) {
              this.success.push("Votre compte a été créé");
            } else {
              this.errors.push("Veuillez recharger la page");
            }
          })
          .catch(error => {
            console.log(error);
            this.errors.push("Impossible de créer le compte");
          });
      }

      this.errors = [];

      if (!this.nom) {
        this.errors.push("Nom required.");
      }
      if (!this.prenom) {
        this.errors.push("Prenom required.");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      }
      if (!this.password || !this.passwordConfirm) {
        this.errors.push("Password required.");
      }
      if (this.password != this.passwordConfirm) {
        this.errors.push("Password and Password Confirm not identical");
      }

      e.preventDefault();
    }
  }
};
</script>
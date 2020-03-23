<template>
  <div class="card">
    <h5 class="card-header info-color white-text text-center py-4">
      <strong>Sign in</strong>
    </h5>

    <!--Card content-->
    <div class="card-body px-lg-5 pt-0">
      <!-- Form -->
      <form id="formCheckLogin" @submit="checkForm" method="post" class="text-center">
        <div v-if="errors.length">
          <div
            v-for="error in errors"
            v-bind:key="error"
            class="alert alert-danger"
            role="alert"
            style="color: red"
          >{{ error }}</div>
        </div>
        <!-- Email -->
        <div class="md-form">
          <label for="email">E-mail</label>
          <input name="email" type="email" v-model="email" id="email" class="form-control" />
        </div>

        <!-- Password -->
        <div class="md-form">
          <label for="password">Password</label>
          <input
            name="password"
            type="password"
            v-model="password"
            id="password"
            class="form-control"
          />
        </div>

        <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import httpAdapter from "axios/lib/adapters/http";

Axios.defaults.adapter = httpAdapter;

export default {
  name: "PageLogin",
  props: {},
  data() {
    return {
      errors: [],
      email: null,
      password: null,
      user: null,
      userJwt: null
    };
  },
  methods: {
    checkForm: function(e) {
      if (this.email && this.password) {
        let apiUrl = "http://127.0.0.1:5000/login"; //"https://deploiementheroku.herokuapp.com/login";

        let data = {
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
            console.log(response);
            if (response.status == 200) {
              let data = response.data;

              let unJwt = data.userJwt;

              this.userJwt = unJwt;

              this.$store.commit("setJwt", this.userJwt);
              this.$router.push("/AllArticle");
            } else {
              this.errors.push("Veuillez recharger la page");
            }
          })
          .catch(error => {
            console.log(error);
            this.errors.push("Identifiant incorrect");
          });

        // return true;
      }

      this.errors = [];

      if (!this.email) {
        this.errors.push("Email required.");
      }
      if (!this.password) {
        this.errors.push("Password required.");
      }

      e.preventDefault();
    }
  }
};
</script>

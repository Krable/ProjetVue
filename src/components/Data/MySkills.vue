<template>
  <div>
    <div v-if="isLoading" class="progress">
      <div class="indeterminate"></div>
    </div>

    <chatOne v-bind:url="src"/>

    <chatTwo v-bind:url="src"/>

    <div class="collection">
      <MySkill
        v-for="skill in skills"
        v-bind:key="skill.name"
        v-bind:name="skill.name"
        v-bind:pourcentage="skill.pourcentage"
      />
    </div>

    <div class="row">
      <div class="input-field col s6">
        <input
          value
          id="first_name2"
          type="text"
          class="validate"
          v-model="inputData"
          @change="onChange($event)"
        >
        <label class="active" for="first_name2">{{ inputData }}</label>
        <input type="submit" value="valider">
      </div>
    </div>
  </div>
</template>

<script>
import MySkill from "../Data/MySkill";
import Axios from "axios";
import chatOne from "../Data/chatOne";
import chatTwo from "../Data/chatTwo";
//import store from "./vuex/store";

import "es6-promise/auto";

export default {
  name: "MySkills",
  props: {},
  components: {
    MySkill,
    chatOne,
    chatTwo
  },
  mounted() {
    setTimeout(() => {
      Axios.get("https://api.thecatapi.com/v1/images/search")
        .then(response => {
          this.src = response.data[0].url;
          this.id = response.data[0].id;
          this.w = response.data[0].weight;
          this.h = response.data[0].width;
          this.isLoading = false;
          this.$store.commit("setUrl", this.src);
        })
        .catch(error => console.log(error));
    }, 2500);
  },
  data() {
    return {
      isLoading: true,
      id: null,
      src: null,
      w: null,
      h: null,
      skills: [
        {
          name: "HTML5",
          pourcentage: 40
        },
        {
          name: "CSS3",
          pourcentage: 10
        },
        {
          name: "PHP",
          pourcentage: 10
        },
        {
          name: "SYMFONY4",
          pourcentage: 10
        },
        {
          name: "JS",
          pourcentage: 10
        },
        {
          name: "Node.js",
          pourcentage: 10
        },
        {
          name: "Vue.js",
          pourcentage: 10
        },
        {
          name: "C#",
          pourcentage: 10
        }
      ],
      inputData: "Saisir"
    };
  },
  methods: {
    onChange(event) {
      console.log(event.target.value); //this.$data.nom
    }
  }
};
</script>

<style scoped>
</style>


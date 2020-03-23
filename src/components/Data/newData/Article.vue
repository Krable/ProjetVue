<template>
  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Titre: {{ titre }} - Auteur: {{ auteur }}</span>
          <p>{{ contenu }}</p>
        </div>
        <div class="card-action" v-if="idArticle">
          <a href>
            <router-link
              :to="{ name: 'UpdateArticle', params: {idArticle: idArticle } } "
            >UpdateArticle</router-link>
          </a>
          <a href>
            <router-link
              :to="{ name: 'RemoveArticle', params: {idArticle: idArticle } }"
            >RemoveArticle</router-link>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageArticle",
  props: {
    titre: String,
    auteur: String,
    contenu: String,
    idArticle: String
  }
};
</script>

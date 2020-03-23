import App from './App.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import PageMySkills from './components/Data/MySkills'
import PageSecondPage from './components/Data/SecondPage'
import PageMyBody from './components/Layout/Body'
import PageLogin from './components/Data/newData/Login'
import PageMyArticle from './components/Data/newData/MyArticles'
import PageAllArticle from './components/Data/newData/AllArticles'
import PageAddArticle from './components/Data/newData/AddArticle'
import PageUpdateArticle from './components/Data/newData/UpdateArticle'
import PageRemoveArticle from './components/Data/newData/RemoveArticle'
import PageRegister from './components/Data/newData/Register'
Vue.config.productionTip = false

const routes = [
  { path: '/MySkills', component: PageMySkills },
  { path: '/SecondPage', component: PageSecondPage },
  { path: '/', component: PageMyBody },
  { path: '/Login', component: PageLogin },
  { path: '/Register', component: PageRegister },
  { path: '/MyArticle', component: PageMyArticle },
  { path: '/AllArticle', component: PageAllArticle },
  { path: '/AddArticle', component: PageAddArticle },
  {
    path: '/UpdateArticle',
    name: 'UpdateArticle',
    component: PageUpdateArticle,
  },
  {
    path: '/RemoveArticle',
    name: 'RemoveArticle',
    component: PageRemoveArticle,
  },
]

const router = new VueRouter({
  routes, // short for `routes: routes`
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    jwt: null,
    articles: [],
    myArticles: [],
    url: null,
  },
  mutations: {
    setUrl(state, value) {
      state.url = value
    },
    setJwt(state, value) {
      state.jwt = value
    },
    setArticles(state, value) {
      state.articles = value
    },
    setMyArticles(state, value) {
      state.myArticles = value
    },
  },
})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

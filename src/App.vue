<script >

import { store } from './store';

import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import SingleCard from './components/SingleCard.vue'

export default {
  components :{
      AppHeader,
      SingleCard,
  }, 
  data() {
    return {
      store,
      
    }
  },
  created(){
    this.Search()
  }
  ,
  methods:{
     Search(value) {
       if (value === "") {
         store.arrayFilm = [];
         store.arraySeries = [];
       }
      axios.get(`${store.baseurl}/search/movie?api_key=${store.key}&language=IT-it&query=${store.ricerca}`).then( ( res ) => { 
        store.arrayFilm = res.data.results
        console.log(res.data.results) 
      });
       axios.get(`${store.baseurl}/search/tv?api_key=${store.key}&language=IT-it&query=${store.ricerca}`).then( ( res ) => { store.arraySeries = res.data.results
        console.log(res.data.results) 
      });
       
      
    },
    posterPath(product) {
      let url = `${store.urlImage}${product.poster_path}`
      return url
  }
} }
 

</script>

<template>
  <AppHeader @submit="Search"></AppHeader>


  <main>
    <div class="container">
      <h2 class="text-white mt-5" v-if="store.arrayFilm.length > 0">Movies</h2>
      <div class=" row  align-items-center  ">
        <SingleCard  v-for="movie in store.arrayFilm" :key="movie.id" :item="movie" :url="posterPath(movie)" />
      </div>
      <h2 class="mt-5 text-white" v-if="store.arraySeries.length > 0">Series</h2>
      <div class=" row  align-items-center ">
        <SingleCard v-for="serie in store.arraySeries" :key="serie.id" :item="serie"  :url="posterPath(serie)"  />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use "./style/main.scss" as *;

  * {
  list-style-type: none;
}

body {
  background: linear-gradient(-45deg, #05a713, #000000, #05a713);
  background-size: 1000% 1000%;
  animation: gradient 10s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

</style>

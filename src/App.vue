<script >

import { store } from './store';
import { api } from './store';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

export default {
  components :{
      AppHeader,
  },
  data() {
    return {
      store,
      api,
    }
  },
  methods:{
    Search(value) {
      if (value === "") {
        store.arrayFilm = [];
        store.arraySeries = []
      }
      axios.get(`${api.basecall}/search/movie?api_key=${api.key}&language=IT-it&query=${value}`).then(res => { store.arrayFilm = res.data.results });
      axios.get(`${api.basecall}/search/tv?api_key=${api.key}&language=IT-it&query=${value}`).then(res => { store.arraySeries = res.data.results });
      
    },
  }
} 
 

</script>

<template>
  <AppHeader @submit="Search"></AppHeader>
</template>

<style lang="scss">
@use './style/main.scss';
</style>

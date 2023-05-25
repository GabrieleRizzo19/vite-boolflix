<script>

  import searchBar from './components/searchBar.vue';
  import filmsContainer from './components/filmsContainer.vue';

  import axios from 'axios';
  import { store } from './data/store';

  export default{
    components: {
      searchBar,
      filmsContainer
    },
    data(){
      return{
        store
      }
    }
  }

</script>

<template>


  <searchBar />

  <filmsContainer />



</template>

<style lang="scss">

  @use './styles/general.scss' as *;

</style>

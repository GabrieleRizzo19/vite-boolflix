<script>

  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';

  import axios from 'axios';
  import { store } from './data/store';

  export default{
    components: {
      AppHeader,
      AppMain
    },
    data(){
      return{
        store
      }
    }
  }

</script>

<template>

  
  <AppHeader />

  <AppMain />



</template>

<style lang="scss">

  @use './styles/general.scss' as *;
  @use './styles/partials/mixins' as *;

  

</style>

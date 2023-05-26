<script>

    import { store } from '../data/store';
    import axios from 'axios';

    export default{
        name: "searchBar",
        data(){
            return{
                searchBarValue: "",
                store
            }
        },
        methods: {
            getFilmOrSeries(apiURL, type){

                let storeArray;
                if(type === "movie"){
                    storeArray = "movieArray";
                }else{
                    storeArray = "seriesArray";
                }

                this.store[storeArray] = [];

                axios.get(apiURL)
                .then(result => {
                    console.log(`Risultati ${type}`, result.data.results);
                    this.store[storeArray] = result.data.results;
                }).catch(err => {
                    console.log(err);
                })

                this.store.loading = false;

            },
            searchFilm() {
                const apiURL = this.store.movieSearchApiURL + this.searchBarValue;

                this.getFilmOrSeries(apiURL, "movie");
            },
            searchSeries() {
                const apiURL = this.store.seriesSearchApiURL + this.searchBarValue;

                this.getFilmOrSeries(apiURL, "series");
            }
        },
        mounted(){

            this.getFilmOrSeries(this.store.popularMovieApiURL, "movie");

            this.getFilmOrSeries(this.store.popularSeriesApiURL, "series");
            
        }
    }

</script>

<template>

    <div class="searchbar">

        <input type="text" v-model="searchBarValue" placeholder="Cerca film" @keyup="searchFilm(); searchSeries()">

    </div>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as *;
    .searchbar{
        height: 150px;
        color: white;
        @include flex(row, center, center, wrap);

        input{
            width: 70%;
            margin-right: 1rem;
        }
    }

</style>
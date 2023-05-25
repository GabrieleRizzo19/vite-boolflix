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
            searchFilm() {
            const apiURL = this.store.movieSearchApiURL + this.searchBarValue;
            this.store.movieArray = [];

            axios.get(apiURL)
            .then(result => {

                for (let i = 0; i < 20; i++) {
                    this.store.movieArray.push(result.data.results[i])
                }
            }).catch(err=> {
                console.log(err);
            })
        }
        }
    }

</script>

<template>

    <div class="searchbar">

        <input type="text" v-model="searchBarValue" placeholder="Cerca film">

        <button @click="searchFilm">CERCA</button>

    </div>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/_mixins' as *;
    .searchbar{
        height: 150px;
        background-color: #222;
        color: white;
        @include flex(row, center, center, wrap);

        input{
            width: 70%;
            margin-right: 1rem;
        }
    }

</style>
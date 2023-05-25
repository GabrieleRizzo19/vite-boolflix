<script>

    import axios from 'axios';
    import { store } from '../data/store';

    export default{
        name: "filmsContainer",
        data(){
            return{
                store
            }
        },
        methods: {
            getLanguageFlagClass(language){
                return "fi fi-" + this.store.iso639to3166[language]
            }
        },
        mounted() {
            axios.get(this.store.popularMovieApiURL)
            .then(result => {
                
                this.store.movieArray = result.data.results
            })

            // console.log("Movie in store: ", this.store.movieArray);
        }
    }

</script>

<template>

    <div class="movie-container">

        <span class="fi fi-en"></span>
        
        <div class="movie-card" v-for="movie in store.movieArray">

            TITOLO: {{ movie.title }}
            <br>
            TITOLO ORIGINALE: {{ movie.original_title }}
            <br>
            LINGUA ORIGINALE: <span :class="getLanguageFlagClass(movie.original_language)"></span>
            <br>
            VOTO: {{ movie.vote_average }}
            <br>


        </div>


    </div>

</template>


<style lang="scss" scoped>

    @use '../styles/partials/mixins' as *;
    .movie-container{
        background-color: aqua;
        height: calc(100vh - 150px);
        @include flex(row, center, center, wrap);
        overflow-y: auto;

        .movie-card{
            background-color: antiquewhite;
            width: calc(25% - 1rem);
            margin: 0 0.5rem;
            

        }
    }

</style>
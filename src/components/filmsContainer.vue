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
            },
            getPosterImage(item){
                return this.store.posterForCardApiURL + item.poster_path;
            },
            getVotefrom1to5(vote){
                return Math.ceil(vote / 2);
            }
        }
    }

</script>

<template>

    <div class="card-container">
        
        <!-- MOVIES CARD -->
        <div class="movie-card" v-for="movie in store.movieArray">

            <h3>FILM</h3>

            <img :src="getPosterImage(movie)" alt="">

            TITOLO: {{ movie.title }}
            <br>
            TITOLO ORIGINALE: {{ movie.original_title }}
            <br>
            LINGUA ORIGINALE: <span :class="getLanguageFlagClass(movie.original_language)"></span>
            <br>
            VOTO: <span v-for="n in getVotefrom1to5(movie.vote_average)"><i class="fa-solid fa-star" style="color: #d8db00;"></i></span>
            <br>

        </div>

        <!-- SERIES CARD -->
        <div class="series-card" v-for="serie in store.seriesArray">

            <h3>SERIE</h3>

            <img :src="getPosterImage(serie)" alt="">

            TITOLO: {{ serie.name }}
            <br>
            TITOLO ORIGINALE: {{ serie.original_name }}
            <br>
            LINGUA ORIGINALE: <span :class="getLanguageFlagClass(serie.original_language)"></span>
            <br>
            VOTO: {{ getVotefrom1to5(serie.vote_average) }}
            <br>

        </div>

    </div>

</template>


<style lang="scss" scoped>

    @use '../styles/partials/mixins' as *;
    .card-container{
        background-color: aqua;
        height: calc(100vh - 150px);
        @include flex(row, space-between, auto, wrap);
        overflow-y: auto;

        .movie-card, .series-card{
            width: 200px;
            margin: 1rem;
            padding: 0.5rem;
        }

        .movie-card{
            background-color: antiquewhite;
        }

        .series-card{
            background-color: green;
        }
    }

</style>
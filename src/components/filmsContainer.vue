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

                if(item.poster_path == null){
                    return "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
                }else{
                    return this.store.posterForCardApiURL + item.poster_path;
                }
            },
            getVotefrom1to5(vote){
                return Math.ceil(vote / 2);
            }
        }
    }

</script>

<template>


    <div id="loading" v-if="store.loading">
        <i class="fa-solid fa-spinner fa-spin"></i>
    </div>

    <div class="card-container">
        
        <!-- MOVIES CARD -->
        <div class="movie-card" v-for="movie in store.movieArray">

            <h3>FILM</h3>

            <img :src="getPosterImage(movie)" alt="">

            <div>TITOLO: {{ movie.title }}</div>

            <div v-if="movie.title != movie.original_title">TITOLO ORIGINALE: {{ movie.original_title }}</div>

            <div> LINGUA ORIGINALE: <span :class="getLanguageFlagClass(movie.original_language)"></span> </div>
            
            <div>
                VOTO: 
                <span v-for="n in getVotefrom1to5(movie.vote_average)">
                    <i class="fa-solid fa-star" style="color: #d8db00;"></i>
                </span>
            </div>

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
            VOTO: 
            <span v-for="n in getVotefrom1to5(serie.vote_average)">
                <i class="fa-solid fa-star" style="color: #d8db00;"></i>
            </span>
            <br>

        </div>

    </div>

</template>


<style lang="scss" scoped>

    @use '../styles/partials/mixins' as *;

    #loading{
        position: absolute;
        z-index: 10;
        width: 100vw;
        height: calc(100vh - 150px);
        background-color: aqua;
        @include flex(row, center, center, wrap);
        font-size: 5rem;
    }
    .card-container{
        background-color: aqua;
        height: calc(100vh - 150px);
        @include flex(row, space-between, auto, wrap);
        overflow-y: auto;

        .movie-card, .series-card{
            width: 200px;
            margin: 1rem;
            padding: 0.5rem;

            img{
                width: 185px;
            }
        }

        .movie-card{
            background-color: white;
        }

        .series-card{
            background-color: lightgray;
        }
    }

</style>
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

        <h2 class="type-title">FILM</h2>

        <div class="movie-container">
            
            <!-- MOVIES CARD -->
            <div class="card" v-for="movie in store.movieArray">


                <div class="img-wrapper">
                    <img :src="getPosterImage(movie)" alt="">
                </div>

                <div class="info">

                    <div> 
                        <span class="card-property">TITOLO:</span>
                        {{ movie.title }}
                    </div>

                    <div v-if="movie.title != movie.original_title">
                        <span class="card-property">TITOLO ORIGINALE:</span>   
                        {{ movie.original_title }}
                    </div>

                    <div>
                        <span class="card-property">LINGUA ORIGINALE:</span>  
                        <span :class="getLanguageFlagClass(movie.original_language)"></span> 
                    </div>
                
                    <div>
                        <span class="card-property">VOTO:</span>  
                        <span v-for="n in getVotefrom1to5(movie.vote_average)">
                            <i class="fa-solid fa-star" style="color: #d8db00;"></i>
                        </span>
                    </div>

                    <div>
                        <span class="card-property">TRAMA:</span>
                        {{ movie.overview }}
                    </div>

                </div>

            </div>

        </div>

        <h2 class="type-title">SERIE</h2>

        <div class="series-container">

            <!-- SERIES CARD -->
            <div class="card" v-for="serie in store.seriesArray">


                <div class="img-wrapper">
                    <img :src="getPosterImage(serie)" alt="">
                </div>

                <div class="info">

                    <div> 
                        <span class="card-property">TITOLO:</span>
                        {{ serie.name }}
                    </div>

                    <div v-if="serie.name != serie.original_name">
                        <span class="card-property">TITOLO ORIGINALE:</span>   
                        {{ serie.original_name }}
                    </div>

                    <div>
                        <span class="card-property">LINGUA ORIGINALE:</span>  
                        <span :class="getLanguageFlagClass(serie.original_language)"></span> 
                    </div>

                    <div class="overview">
                        <span class="card-property">VOTO:</span>  
                        <span v-for="n in getVotefrom1to5(serie.vote_average)">
                            <i class="fa-solid fa-star" style="color: #d8db00;"></i>
                        </span>
                    </div>

                </div>

            </div>
            

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
        height: calc((100vh) - 166px);
        color: white;

        .type-title{
            margin: 1rem auto;
        }
    }
    .movie-container, .series-container{

        display: flex;
        width: 100%;
        overflow-x: auto;

        .card{
            width: 200px;
            height: 300px;
            margin: 1rem;
            padding: 0.5rem;
            background-color: black;
            border: 2px solid white;

            &:hover{
                width: 200px;
                .img-wrapper{
                    display: none;
                }

                .info{
                    display: block;
                }
            }

            .img-wrapper{
                @include flex(row, center, center);
                img{
                    width: 185px;
                }
            }

            .info{
                display: none;
                width: 180px;
                max-height: 100%;
                word-wrap: break-word;
                white-space: pre-wrap;
                overflow: hidden;
                

                .card-property{
                    font-weight: bold;

                    &::after{
                        content: "\a";
                        white-space: pre-wrap;
                    }

                }
            }

        }
    }

</style>
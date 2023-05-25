import { reactive } from "vue";

export const store = reactive({
    apiKey: "c2ec2eeb72c0803794e79e18b3213df3",
    popularMovieApiURL: "https://api.themoviedb.org/3/movie/popular?api_key=c2ec2eeb72c0803794e79e18b3213df3&language=it-IT",
    movieSearchApiURL: "https://api.themoviedb.org/3/search/movie?api_key=c2ec2eeb72c0803794e79e18b3213df3&language=it-IT&query=",
    movieArray: []
})
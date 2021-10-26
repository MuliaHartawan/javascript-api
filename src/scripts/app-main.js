import $ from 'jquery';
import './app-nav-bar.js';
import './app-footer.js';
import './app-card-list';

const movieListElement = document.querySelector("card-list");

const popularMovie = () => {
    $.ajax({
        url : "https://api.themoviedb.org/3/movie/popular?api_key=9b3a6d77a0a149c3b7ac40d7eb9c9757", 
        method : "GET",
        success: function(result){
            renderPopularMovie(result.results)
        },
        error: function(error){
            fallbackResult(error.responseJSON.status_message);
        }
    });
}
const nowPlayingMovie = () =>{
    $.ajax({
        url : "https://api.themoviedb.org/3/movie/now_playing?api_key=9b3a6d77a0a149c3b7ac40d7eb9c9757", 
        method : "GET",
        success: function(result){
            renderNowPlayingMovie(result.results)
        },
        error: function(error){
            fallbackResult(error);
        }
    });
}
const renderPopularMovie = (movie) => {
    movieListElement.movies = movie;
};
const renderNowPlayingMovie = (movie) => {
    movieListElement.movies = movie;
};
const fallbackResult = message => {
    movieListElement.renderError(message);
};

const main = async () => {
    const movie = await popularMovie();
    const playingMovie = await nowPlayingMovie();
}

export default main
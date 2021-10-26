import $ from 'jquery';
import './app-card-popular';
import './app-card-now';

const moviePopularListElement = document.querySelector("card-popular");
const movieNowListElement = document.querySelector("card-now");

const popularMovie = () => {
    $.ajax({
        url : "https://api.themoviedb.org/3/movie/popular?api_key=9b3a6d77a0a149c3b7ac40d7eb9c9757", 
        method : "GET",
        success: function(result){
            renderPopularMovie(result.results);
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
            renderNowPlayingMovie(result.results);
        },
        error: function(error){
            fallbackResult(error);
        }
    });
}
const renderPopularMovie = (movie) => {
    moviePopularListElement.moviesPopular = movie;
};

const renderNowPlayingMovie = (movie) => {
    movieNowListElement.moviesNow = movie;
};

const fallbackResult = message => {
    movieListElement.renderError(message);
    movieNowListElement.renderError(message);
};


const main = async () => {
    const movie = await popularMovie();
    const playingMovie = await nowPlayingMovie();
}

export default main;
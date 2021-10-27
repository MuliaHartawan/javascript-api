import $ from "jquery";
import Swal from "sweetalert2";
import './app-movie-detail';

const show = () => {
    const urlParams = new URLSearchParams(window.location.search);        
    const movieId = urlParams.get("id");
    $.ajax({
        url : `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=video,image,credits&api_key=9b3a6d77a0a149c3b7ac40d7eb9c9757`, 
        method : "GET",
        success: function(result){
            const movieDetailElement = document.querySelector("movie-detail");
            movieDetailElement.movie = result
        },
        error: function(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            })
        }
    });
}


export default show;
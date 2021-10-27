import axios from 'axios';
import Swal from 'sweetalert2';
import './app-card-item.js';
class AppCardList extends HTMLElement {

    constructor(){
        super();
    }
    
    set moviesPopular(movies){
        this._movies = movies;
        this.render();
    }

    async render(){
        try {
            const {data} = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=9b3a6d77a0a149c3b7ac40d7eb9c9757');
            
            this._movies.map((mov) => {
                mov.list_genre = data.genres.filter((d) => {
                    return mov.genre_ids.includes(d.id);
                });
                // console.log(mov.list_genre);
                mov.list_genre = mov.list_genre.map((r) => r.name);

                return mov;
            });
            
            this._movies.slice(-10).forEach(movie => {
                const moviesItemElement = document.createElement("card-item");
                moviesItemElement.movie = movie;
                this.appendChild(moviesItemElement);
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            })
        }
    }

    renderError(message){
        Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: message,
            })
        }
}

customElements.define("card-popular", AppCardList);
import moment from 'moment';
class AppCardItem extends HTMLElement {

    constructor(){
        super();
    }

    set movie(movie){
        this._movie = movie;
        this.render();
    }

    connectedCallback(){
        this.render();
    }
    
    render(){
        this.innerHTML = `
        <div class="mt-8">
            <a href="#">
                <img src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" class="hover:opacity-75 transition ease-in-out duration-150" alt="${this._movie.title}">
            </a>
            <div class="mt-2">
                <a href="" class="text-lg mt-2 hover:text-gray:300">${this._movie.original_title}</a>
                <div class="flex items-center text-gray-400 text-sm mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current text-yellow-500 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    <span class="ml-1">${this._movie.vote_average}</span>
                    <span class="mx-2">|</span>
                    <span>${moment(this._movie.release_date).format("MMM Do YY")}</span>
                </div>
                <div class="text-gray-400 text-sm">
                    ${this._movie.list_genre.join(", ")}
                </div>
            </div>
        </div>
        `;
    }  
}
customElements.define("card-item", AppCardItem);
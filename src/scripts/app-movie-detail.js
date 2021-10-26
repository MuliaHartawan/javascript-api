import moment from "moment";
import $ from "jquery";
import axios from "axios";
import Swal from "sweetalert2";
class MovieDetail extends HTMLElement{
    constructor(){
        super()
    }

    set movie(movie){
        this._movie = movie;
        this.render();
    }

    async render(){
        try {
            this.innerHTML = `
            <div class="movie-info border-gray-800">
                <div class="container mx-auto px-4 py-16 flex md:flex-row">
                    <img src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" alt="" class="w-64 md:w-96">
                    <div class="md:ml-24">
                        <h2 class="text-4xl font-semibold">${this._movie.original_title}</h2>
                        <div class="flex flex-wrap items-center text-gray-400 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current text-yellow-500 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            <span class="ml-1">${this._movie.vote_average}</span>
                            <span class="mx-2">|</span>
                            <span>${moment(this._movie.release_date).format("MMM Do YY")}</span>
                            <span class="mx-2">|</span>
                            <span>Action, Thriller, Comedy</span>
                        </div>
                        <p class="text-gray-300 mt-8">
                        ${this._movie.overview}
                        </p>
                        <div class="mt-12">
                            <h4 class="text-white font-semibold">Featured Cast</h4>
                            <div class="flex mt-4" id="cast-featured">

                            </div>
                        </div>
                        <div class="mt-12">
                            <button class="flex items-center bg-yellow-500 text-gray-900 rounded font-semibold px-5 py-4 hover:bg-yellow-600 transition ease-in-out duration-150">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Play Trailer</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="movie-cast border-b border-gray-800">
                <div class="container mx-auto px-4 py-16">
                    <h2 class="text-4xl font-semibold">Cast</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8" id="cast-container">
                        
                    </div>
                </div>
            </div>

            <div class="image-preview border-b border-gray-800">
                <div class="container mx-auto px-4 py-16">
                    <h2 class="text-4xl font-semibold">Images</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" id="images-overview">
                        
                    </div>
                </div>
            </div>
            `;

            const castFeatureElement = this.querySelector("#cast-featured");
            castFeatureElement.innerHTML = ``;

            this._movie.credits.crew.slice(-2).forEach(item => {
                castFeatureElement.innerHTML += `
                <div class="mr-8">
                    <div>${item.name}</div>
                    <div class="text-sm text-gray-400">${item.job}</div>
                </div>
                `;
            });
        
            
            const castContainerElement = this.querySelector("#cast-container");
            castContainerElement.innerHTML = ``;

            this._movie.credits.cast.slice(-10).forEach(item => {
                castContainerElement.innerHTML += `
                <div class="mt-8">
                    <a href="#">
                        <img src="https://image.tmdb.org/t/p/w500${item.profile_path}" class="hover:opacity-75 transition ease-in-out duration-150" alt="${item.character}">
                    </a>
                    <div class="mt-2">
                        <a href="#" class="text-lg mt-2 hover:text-gray:300">${item.original_name}</a>
                        <div class="flex items-center text-gray-400 text-sm">
                            <span class="">${item.character}</span>
                        </div>
                    </div>
                </div>
                `;
            });
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${this._movie.id}/images?api_key=9b3a6d77a0a149c3b7ac40d7eb9c9757`);
            console.log(data);
            const imageOverviewElement = this.querySelector("#images-overview");
            imageOverviewElement.innerHTML = ``;
            
            data.backdrops.slice(-9).forEach(item => {
                imageOverviewElement.innerHTML += `
                <div class="mt-8">
                    <a href="#">
                        <img src="https://image.tmdb.org/t/p/w500/${item.file_path}" alt="images" class="hover:opacity-75 transition ease-in-out duration-150 rounded-lg">
                    </a>
                </div>
                `;
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            })
        }
    }
}
customElements.define('movie-detail', MovieDetail);
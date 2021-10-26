import $, { error } from "jquery";
class AppMovieInfo extends HTMLElement {

    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }
    
    render(){

        this.movieInfo();
    }
    movieInfo(){
        
        fetch()
        .then(response => {
            
        })
        .then(movieInfo => {
            
        })
    }
}
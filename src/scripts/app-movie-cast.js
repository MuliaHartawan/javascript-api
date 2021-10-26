class AppMovieCast extends HTMLElement {

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }
    
    render(){

    }
    movie(id){
        $.ajax({
            url : `https://api.themoviedb.org/3/movie/${id}?append_to_response=video,image,credits?api_key=9b3a6d77a0a149c3b7ac40d7eb9c9757`, 
            method : "GET",
            success: function(result){
                console.log(result.genres);
            },
            error: function(error){
                console.log(error);
            }
        });
    }
    
}
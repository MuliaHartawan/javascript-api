import "regenerator-runtime";
import  './styles/main.css';
import './scripts/app-nav-bar.js';
import './scripts/app-footer.js';
import show from './scripts/app-show';
import main from './scripts/app-main';

document.addEventListener("DOMContentLoaded",() => {
    const currentpage = window.location.pathname;
    if(currentpage.startsWith("/show.html")){
        show();
    }else {
        main();
    }
});


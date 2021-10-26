import './styles/main.css';

import main from './scripts/app-main';

document.addEventListener("DOMContentLoaded",() => {
    const currentpage = window.location.pathname;
    if(currentpage.startsWith("/show.html")){
        console.log("ini halaman show");
    }else {
        main();
    }
});


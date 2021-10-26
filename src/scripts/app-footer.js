class AppFooter extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <footer class="h-10">
            <div class="container mx-auto px-4 flex flex-col md:flex-row px-4 py-6 justify-center">
                <div>
                    Copyright © <span id="footer-cr-years"> 2021 </span> Movie App All Right Reserved.
                </div>
            </div>    
        </footer>
        `;
    }
}

customElements.define('app-footer', AppFooter);
class AppFooter extends HTMLElement {

  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
      <div class="container d-flex justify-content-center py-3 my-3 border-top">
        <span class="text-muted">&copy; 2022 Alwan Dwi Putra, SIB</span>
      </div>`;
  }
}
  
  customElements.define("app-footer", AppFooter);
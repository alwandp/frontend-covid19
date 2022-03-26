class AppBar extends HTMLElement {

  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
    <div class="container d-flex justify-content-center py-3 mb-3 border-bottom">
      <h4 class="fw-bold">Covid-19 Statistic</h4>
    </div>`;
  }
}

customElements.define("app-bar", AppBar);
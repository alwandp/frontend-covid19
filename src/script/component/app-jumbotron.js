class AppJumbotron extends HTMLElement {

    connectedCallback(){
      this.render();
    }
  
    render(){
      this.innerHTML = `
      <div class="p-5 mb-4 text-white bg-primary rounded-3">
        <div class="container-fluid py-5 text-center">
          <h1 class="display-5 fw-bold">Covid-19 Statistic</h1>
          <p class="fs-4">View confirmed, recovered, deaths Covid-19 cases by country.</p>
        </div>
      </div>`;
    }
  }
  
  customElements.define("app-jumbotron", AppJumbotron);
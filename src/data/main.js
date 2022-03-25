const covidListElement = document.querySelector("#covidList");

covidListElement.innerHTML = `
  <div class="container">
    <h2>Covid-19 <span class="fw-bold">Global</span></h2>
    <div class="row mt-5">
      <div class="col-12 col-lg-4">
        <h5>Confirmed Case</h5>
        <div class="card text-light bg-warning mb-3 py-5">
          <div class="card-body">
            <p class="text-center mb-0 fs-1 fw-bold">104,694,138</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <h5>Recovered Case</h5>
        <div class="card text-light bg-success mb-3 py-5">
          <div class="card-body">
            <p class="text-center mb-0 fs-1 fw-bold">104,694,138</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <h5>Death Case</h5>
        <div class="card text-light bg-danger mb-5 py-5">
          <div class="card-body">
            <p class="text-center mb-0 fs-1 fw-bold">104,694,138</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;


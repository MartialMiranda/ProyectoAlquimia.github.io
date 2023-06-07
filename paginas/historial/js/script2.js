//tarjeta completado

const completadoTemplate = document.createElement('template');
completadoTemplate.innerHTML = `
  <div class="container">
    <div class="card bg-white col-md-10 mx-auto rounded shadow" style="border-color: #FFA800;">
      <div class="row">
        <div class="col-md">
          <img class="img-fluid m-2 image" alt="imagenPlato" style="width: 300px; height: 200px; object-fit: cover;">
        </div>
        <div class="col-md mt-2 mb-2 m-2">
          <p class="card-title" style="color: #FFA800;"><span class="nombre" style="font-size: 20px; font-weight: bold;"></span></p>
          <p class="card-text"><strong>Fecha:</strong> <span class="fecha"></span></p>
          <p class="card-text"><strong>Asientos:</strong> <span class="asientos"></span></p>
          <p class="card-text"><strong>Hora:</strong> <span class="hora"></span></p>
        </div>
        <div class="col-md mt-2 mb-2 text-center">
          <p class="card-title"><span class="categoria" style="font-size: 20px; font-weight: bold;">Menú a elección</span></p>          
          <div class="row">
            <div class="col d-grid gap-2 col-md-6 mx-auto">
              <button type="button" class="btn btn-warning m-2 calificarBtn">Calificar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
`;

class TarjetaCompletado extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.loadJsonData();
  }

  async loadJsonData() {
    const response = await fetch('./js/historial.json');
    const data = await response.json();

    const menuItems = data.historial;

    for (const menuItem of menuItems) {
      const clonedTemplate = completadoTemplate.content.cloneNode(true);
      const clonedRoot = clonedTemplate.querySelector('.card');

      const clonedImg = clonedRoot.querySelector('.image');
      clonedImg.src = menuItem.imagen;
      clonedRoot.querySelector('.nombre').innerText = menuItem.nombre;
      clonedRoot.querySelector('.categoria').innerText = menuItem.categoria;
      clonedRoot.querySelector('.fecha').innerText = menuItem.fecha;
      clonedRoot.querySelector('.hora').innerText = menuItem.hora;
      clonedRoot.querySelector('.asientos').innerText = menuItem.asientos;

      clonedRoot.querySelector('.calificarBtn').addEventListener('click', () => {
        const reservaModal = document.querySelector('#CalificarModal');
        const reservaModalInstance = new bootstrap.Modal(reservaModal);
        reservaModalInstance.show();
      });

      this.shadowRoot.appendChild(clonedTemplate);
    }
  }
}

customElements.define('tarjeta-completado', TarjetaCompletado);
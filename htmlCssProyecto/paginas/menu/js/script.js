const template = document.createElement('template');
template.innerHTML = `  
<div class="container">
  <div class="col d-flex justify-content-center">
    <div class="card mb-2 mt-2 shadow">
      <div class="row g-0">
        <div class="col-md-6  d-flex align-items-center">
          <img id="image" class="img-fluid rounded-start" alt="imagenPLato">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <div class="row">
              <div class="col-8">
                <p class="fs-6 mb-0 "  style="color: #FFA800;">Comida <strong class="fs-6" id="nombre"></strong> </p>
              </div>
              <div class="col-4 d-flex justify-content-end mb-0">
                <p class="fw-bold mb-0" id="categoria"></p>
              </div>
            </div>

            <div style="width: 100%; background: #FFA800; height: 2px;"></div>
            <div class="row">
              <div class="col">
                <p class="fw-semibold mb-0">Entrada:</p>
                <p class="fst-normal " id="entrada"></p>
                <p class="fw-semibold mb-0">Plato Principal:</p>
                <p class="fst-normal " id="principal"></p>
                <p class="fw-semibold mb-0">Postre:</p>
                <p class="fst-normal" id="postre"></p>
              </div>
              <div class="col">
                <p class="fw-bold text-center" style="background: #FFA800; color: #ffff;">Ingreso: <strong id="horario1"></strong> </p>
                <p class="fw-semibold text-center mb-0" id="fecha1"></p>
                <p class="fw-semibold text-center" id="fecha2"></p>
                <p class="fw-bold text-center" style="background: #FFA800; color: #ffff;">Ingreso: <strong id="horario2"></strong> </p>
                <p class="fw-semibold text-center mb-0" id="fecha3"></p>
                <p class="fw-semibold text-center" id="fecha4"></p>
                <div class="row d-flex justify-content-center">
                  <p class="fw-bold col-auto mb-0"
                    style="background: #FFA800; color: #ffff; padding: 0 8px; border-radius: 5px;">Precio:</p>
                  <p class="fw-bold col-auto mb-0" id="precio"></p>
                </div>
              </div>
            </div>

            <div class="row d-flex justify-content-center m-1">
              <button id="botonReservar" type="button" class="btn fw-bold col-auto "
                style="background: #FFA800; color: #ffff; ">Reservar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
`;

class TarjetaPlato extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.loadJsonData();
  }

  async loadJsonData() {
    const response = await fetch('./json/menu.json');
    const data = await response.json();
  
    const menuItems = data.menu;
  
    for (const menuItem of menuItems) {
      const clonedTemplate = document.createElement('div');
      clonedTemplate.innerHTML = template.innerHTML;
  
      this.shadowRoot.appendChild(clonedTemplate);
  
      const clonedRoot = this.shadowRoot.lastElementChild;
      const clonedImg = clonedRoot.querySelector('#image');
      clonedImg.src = menuItem.imagen;      
      clonedRoot.querySelector('#nombre').innerText = menuItem.nombre;
      clonedRoot.querySelector('#categoria').innerText = menuItem.categoria;
      clonedRoot.querySelector('#entrada').innerText = menuItem.entrada;
      clonedRoot.querySelector('#principal').innerText = menuItem.platoPrincipal;
      clonedRoot.querySelector('#postre').innerText = menuItem.postre;
      clonedRoot.querySelector('#horario1').innerText = menuItem.horario1;
      clonedRoot.querySelector('#horario2').innerText = menuItem.horario2;
      clonedRoot.querySelector('#fecha1').innerText = menuItem.fecha1;
      clonedRoot.querySelector('#fecha2').innerText = menuItem.fecha2;
      clonedRoot.querySelector('#fecha3').innerText = menuItem.fecha3;
      clonedRoot.querySelector('#fecha4').innerText = menuItem.fecha4;
      clonedRoot.querySelector('#precio').innerText = menuItem.precio;      
      clonedRoot.querySelector('#botonReservar').addEventListener('click', () => {
        const reservaModal = document.querySelector('#reservationModal');
        const reservaModalInstance = new bootstrap.Modal(reservaModal);
        reservaModalInstance.show();        
      });
    }
  }
}

customElements.define('tarjeta-plato', TarjetaPlato);

const template = document.createElement('template');
template.innerHTML = `
  <div class="container">
    <div class="card bg-white col-md-10 mx-auto rounded shadow" style="border-color: #FFA800;">
      <div class="row">
        <div class="col-md">
          <img class="img-fluid m-2 image" alt="imagenPlato" style="width: 300px; height: 200px; object-fit: cover;">
        </div>
        <div class="col-md mt-2 mb-2 m-2">
          <p class="card-title" style="color: #FFA800;"><span class="nombre" style="font-size: 20px; font-weight: bold;"></span></p>
          <p class="card-text"><strong>Fecha:</strong> <span class="fecha"></span></p>
          <p class="card-text"><strong>Días restantes:</strong> <span> <strong class="diasRestantes" style="color: red;">0</strong> días</span></p>
          <p class="card-text"><strong>Asientos:</strong> <span class="asientos"></span></p>
          <p class="card-text"><strong>Hora:</strong> <span class="hora"></span></p>
        </div>
        <div class="col-md mt-2 mb-2 text-center">
          <p class="card-title"><span class="categoria" style="font-size: 20px; font-weight: bold;">Menú a elección</span></p>
          <div class="row">
            <div class="col d-grid gap-2 col-md-6 mx-auto">
              <button type="button" class="btn btn-primary m-2 editarBtn">Editar</button>
            </div>
          </div>
          <div class="row">
            <div class="col d-grid gap-2 col-md-6 mx-auto">
              <button type="button" class="btn btn-danger m-2 eliminarBtn">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
`;

class TarjetaHistorial extends HTMLElement {
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
            const clonedTemplate = template.content.cloneNode(true);
            const clonedRoot = clonedTemplate.querySelector('.card');

            const clonedImg = clonedRoot.querySelector('.image');
            clonedImg.src = menuItem.imagen;
            clonedRoot.querySelector('.nombre').innerText = menuItem.nombre;
            clonedRoot.querySelector('.categoria').innerText = menuItem.categoria;
            clonedRoot.querySelector('.fecha').innerText = menuItem.fecha;
            clonedRoot.querySelector('.hora').innerText = menuItem.hora;
            clonedRoot.querySelector('.asientos').innerText = menuItem.asientos;

            const fechaTexto = clonedRoot.querySelector('.fecha').textContent;
            const fechaActual = new Date();
            const fechaReserva = new Date(fechaTexto);
            const diferenciaTiempo = fechaReserva.getTime() - fechaActual.getTime();
            const diasRestantes = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
            clonedRoot.querySelector('.diasRestantes').textContent = diasRestantes.toString();

            clonedRoot.querySelector('.editarBtn').addEventListener('click', () => {
                const reservaModal = document.querySelector('#reservationModal');
                const reservaModalInstance = new bootstrap.Modal(reservaModal);
                reservaModalInstance.show();
            });

            clonedRoot.querySelector('.eliminarBtn').addEventListener('click', () => {
                const eliminarModal = document.querySelector('#EliminarModal');
                const confirmarEliminarBtn = eliminarModal.querySelector('#confirmarEliminarBtn');
                const eliminarElemento = () => {
                    clonedRoot.setAttribute('style', 'display: none');
                    console.log('Elemento eliminado');
                    eliminarModal.modal('hide');
                };
                confirmarEliminarBtn.addEventListener('click', eliminarElemento);
                const eliminarModalInstance = new bootstrap.Modal(eliminarModal);
                eliminarModalInstance.show();
            });

            this.shadowRoot.appendChild(clonedTemplate);
        }
    }
}

customElements.define('tarjeta-historial', TarjetaHistorial);







//agregar fechas con efecto hover
document.getElementById("agregar-btn").addEventListener("click", function () {
  var fechaSeleccionada = document.getElementById("fecha").value;
  var estadoSeleccionado = document.getElementById("estado").value;
  var fechasAgregadasContainer = document.getElementById("fechas-agregadas");

  var fechaDiv = document.createElement("div");
  fechaDiv.classList.add("row");
  fechaDiv.classList.add("fecha-agregada");

  var fechaCol = document.createElement("div");
  fechaCol.classList.add("col");
  var fechaSpan = document.createElement("span");
  fechaSpan.textContent = fechaSeleccionada;
  fechaCol.appendChild(fechaSpan);

  var estadoCol = document.createElement("div");
  estadoCol.classList.add("col");
  var estadoSpan = document.createElement("span");
  estadoSpan.textContent = estadoSeleccionado === "1" ? "Activo" : "Inactivo";
  estadoCol.appendChild(estadoSpan);

  fechaDiv.appendChild(fechaCol);
  fechaDiv.appendChild(estadoCol);

  fechasAgregadasContainer.appendChild(fechaDiv);
});

//horarios

document.getElementById("agregar-btn2").addEventListener("click", function () {
  var horaAperturaSeleccionada = document.getElementById("hora-apertura").value;
  var horaCierreSeleccionada = document.getElementById("hora-cierre").value;
  var horariosAgregadosContainer = document.getElementById("horarios-agregados");

  var horarioDiv = document.createElement("div");
  horarioDiv.classList.add("row");
  horarioDiv.classList.add("horario-agregado");

  var horaAperturaCol = document.createElement("div");
  horaAperturaCol.classList.add("col");
  var horaAperturaSpan = document.createElement("span");
  horaAperturaSpan.textContent = horaAperturaSeleccionada;
  horaAperturaCol.appendChild(horaAperturaSpan);

  var horaCierreCol = document.createElement("div");
  horaCierreCol.classList.add("col");
  var horaCierreSpan = document.createElement("span");
  horaCierreSpan.textContent = horaCierreSeleccionada;
  horaCierreCol.appendChild(horaCierreSpan);

  horarioDiv.appendChild(horaAperturaCol);
  horarioDiv.appendChild(horaCierreCol);

  horariosAgregadosContainer.appendChild(horarioDiv);
});

//categorias
document.getElementById("agregar-btn3").addEventListener("click", function () {
  var nombreCategoria = document.getElementById("nombre-categoria").value;
  var categoriasAgregadasContainer = document.getElementById("categorias-agregadas");

  var categoriaDiv = document.createElement("div");
  categoriaDiv.classList.add("row");
  categoriaDiv.classList.add("categoria-agregada");

  var nombreCategoriaCol = document.createElement("div");
  nombreCategoriaCol.classList.add("col");
  var nombreCategoriaSpan = document.createElement("span");
  nombreCategoriaSpan.textContent = nombreCategoria;
  nombreCategoriaCol.appendChild(nombreCategoriaSpan);

  categoriaDiv.appendChild(nombreCategoriaCol);

  categoriasAgregadasContainer.appendChild(categoriaDiv);
});

//platos
document.getElementById("agregar-btn4").addEventListener("click", function () {
  var categoriaSeleccionada = document.getElementById("categoria-plato").value;
  var tipoCocina = document.getElementById("tipo-cocina").value;
  var tipoPlato = document.getElementById("tipo-plato").value;
  var estadoPlato = document.getElementById("estado-plato").value;
  var platosAgregadosContainer = document.getElementById("platos-agregados");

  var platoDiv = document.createElement("div");
  platoDiv.classList.add("row");
  platoDiv.classList.add("plato-agregado");

  var categoriaCol = document.createElement("div");
  categoriaCol.classList.add("col");
  var categoriaSpan = document.createElement("span");
  categoriaSpan.textContent = categoriaSeleccionada;
  categoriaCol.appendChild(categoriaSpan);

  var tipoCocinaCol = document.createElement("div");
  tipoCocinaCol.classList.add("col");
  var tipoCocinaSpan = document.createElement("span");
  tipoCocinaSpan.textContent = tipoCocina;
  tipoCocinaCol.appendChild(tipoCocinaSpan);

  var tipoPlatoCol = document.createElement("div");
  tipoPlatoCol.classList.add("col");
  var tipoPlatoSpan = document.createElement("span");
  tipoPlatoSpan.textContent = tipoPlato;
  tipoPlatoCol.appendChild(tipoPlatoSpan);

  var estadoCol = document.createElement("div");
  estadoCol.classList.add("col");
  var estadoSpan = document.createElement("span");
  estadoSpan.textContent = estadoPlato === "1" ? "Activo" : "Inactivo";
  estadoCol.appendChild(estadoSpan);

  platoDiv.appendChild(categoriaCol);
  platoDiv.appendChild(tipoCocinaCol);
  platoDiv.appendChild(tipoPlatoCol);
  platoDiv.appendChild(estadoCol);

  platosAgregadosContainer.appendChild(platoDiv);
});

//menu
// Obtener el formulario
const formulario = document.getElementById('formulario5');

// Obtener los campos de la tarjeta
const imagen = document.getElementById('image');
const nombre = document.getElementById('nombre');
const categoria = document.getElementById('categoria');
const entrada = document.getElementById('entrada');
const principal = document.getElementById('principal');
const postre = document.getElementById('postre');
const horario1 = document.getElementById('horario1');
const fecha1 = document.getElementById('fecha1');
const fecha2 = document.getElementById('fecha2');
const horario2 = document.getElementById('horario2');
const fecha3 = document.getElementById('fecha3');
const fecha4 = document.getElementById('fecha4');
const precio = document.getElementById('precio1');

// Función para actualizar la visualización
function actualizarVisualizacion() {
  // Obtener los valores del formulario
  const titulo = formulario.titulo.value;
  const fecha1Select = formulario['fecha1-select'].value;
  const fecha2Select = formulario['fecha2-select'].value;
  const horarioSelect = formulario['horario-select'].value;
  const categoriaSelect = formulario.categoria.value; // Nueva línea para obtener la categoría
  const platoMenu = formulario['plato-menu'].selectedOptions[0].textContent;
  const precioInput = formulario.precio.value;
  const moneda = formulario.moneda.value;

  // Actualizar los campos de la tarjeta con los valores del formulario
  nombre.innerText = titulo;
  fecha1.innerText = fecha1Select;
  fecha2.innerText = fecha2Select;
  horario1.innerText = horarioSelect;
  fecha3.innerText = fecha1Select;
  fecha4.innerText = fecha2Select;
  horario2.innerText = horarioSelect;
  categoria.innerText = categoriaSelect; // Actualizar la categoría

  // Actualizar el precio con el símbolo de moneda
  precio.innerText = `${precioInput} ${moneda}`;

  // Asignar el valor del plato seleccionado
  entrada.innerText = platoMenu;
  principal.innerText = platoMenu;
  postre.innerText = platoMenu;
}

// Agregar eventos de escucha a los campos del formulario
formulario.titulo.addEventListener('input', actualizarVisualizacion);
formulario['fecha1-select'].addEventListener('change', actualizarVisualizacion);
formulario['fecha2-select'].addEventListener('change', actualizarVisualizacion);
formulario['horario-select'].addEventListener('change', actualizarVisualizacion);
formulario.categoria.addEventListener('change', actualizarVisualizacion); // Nuevo evento para la categoría
formulario['plato-menu'].addEventListener('change', actualizarVisualizacion);
formulario.precio.addEventListener('input', actualizarVisualizacion);
formulario.moneda.addEventListener('change', actualizarVisualizacion);

// Cargar la imagen en la tarjeta al seleccionar un archivo
formulario.foto.addEventListener('change', function() {
  const fotoInput = formulario.foto.files[0];
  if (fotoInput) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imagen.src = e.target.result;
    };
    reader.readAsDataURL(fotoInput);
  } else {
    imagen.src = 'ruta/a/imagen-de-muestra.jpg';
  }
});

// Restablecer los valores del formulario
formulario.reset();








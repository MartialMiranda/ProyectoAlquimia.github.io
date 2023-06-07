$(document).ready(function() {
    // URL de la API
    var apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
    $('#reservasTable').DataTable({
      ajax: {
        url: apiUrl,
        dataSrc: ''
      },
      columns: [
        { data: 'id' },
        { data: 'title' },
        { data: 'body' },
        { data: 'userId' },
        {
          data: 'id',
          render: function(data) {
            return `
              <button class="btn btn-primary editarBtn" data-id="${data}">
                <i class="bi bi-pencil-fill"></i>
              </button>
              <button class="btn btn-danger eliminarBtn" data-id="${data}">
                <i class="bi bi-trash-fill"></i>
              </button>
            `;
          }
        }
      ],
      language: {
        search: 'Buscar:',
        lengthMenu: 'Mostrar _MENU_ registros por página',
        zeroRecords: 'No se encontraron registros',
        info: 'Mostrando página _PAGE_ de _PAGES_',
        infoEmpty: 'No hay registros disponibles',
        infoFiltered: '(filtrado de _MAX_ registros en total)'
      },
      paging: true,
      pageLength: 10
    });
  

    $('#filtroNombre').keyup(function() {
      $('#reservasTable').DataTable().column(1).search($(this).val()).draw();
    });
  
    $('#filtroFecha').keyup(function() {
      $('#reservasTable').DataTable().column(2).search($(this).val()).draw();
    });
  

    $(document).on('click', '.editarBtn', function() {
      var reservaId = $(this).data('id');

      console.log('Editar reserva ID:', reservaId);
    });
  

    $(document).on('click', '.eliminarBtn', function() {
      var reservaId = $(this).data('id');

      console.log('Eliminar reserva ID:', reservaId);
    });
  });
  
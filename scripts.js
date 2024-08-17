document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var whatsappUrl = `https://wa.me/3624943379?text=Nombre:%20${name}%0ACorreo:%20${email}%0AMensaje:%20${message}`;
    window.open(whatsappUrl, '_blank');
});

document.addEventListener('DOMContentLoaded', function () {
    $('#habitacionModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var habitacion = button.data('habitacion');
        var modal = $(this);
        var imgSrc = 'img/habitacion' + habitacion + '.jpg';
        var desc = 'Descripción de la Habitación ' + habitacion; // Puedes personalizar las descripciones aquí

        modal.find('.modal-title').text('Habitación ' + habitacion);
        modal.find('#habitacionModalImg').attr('src', imgSrc);
        modal.find('#habitacionModalDesc').text(desc);
    });
});
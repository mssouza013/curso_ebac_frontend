$(document).ready(function () {
    $('#form-tarefa').submit(function (e) {
        e.preventDefault();

        const taskText = $('#nome-da-tarefa-inp').val().trim();

        if (taskText !== '') {
            $('#lista-tarefa').append(`<li>${taskText}</li>`);
            $('#nome-da-tarefa-inp').val('');
        }
    });

    $('#lista-tarefa').on('click', 'li', function () {
        $(this).toggleClass('feito');
    });
});
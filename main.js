const form = document.getElementById('form-validar');

form.addEventListener('submit', function(e) {

    e.preventDefault();


    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagem = document.getElementById('mensagem');


    if (campoB > campoA) {
        mensagem.textContent = 'Correto!';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'O valor do campo A deve ser menor do que o campo B';
        mensagem.style.color = 'red';
    }
})
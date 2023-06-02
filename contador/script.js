// contagem inicial
let contar = 0;

// selecionar valor e botões
const valor = document.querySelector('#value');
const botoes = document.querySelectorAll('.btn');

botoes.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const estilos = e.currentTarget.classList;
        if(estilos.contains('decrease')) {
            contar--;
        } else if (estilos.contains('increase')) {
            contar++;
        } else {
            contar = 0;
        }
        if (contar > 0) {
            valor.style.color = 'green';
        } else if (contar < 0) {
            valor.style.color = 'red';
        } else {
            valor.style.color = 'blue';
        }
        valor.textContent = contar;
    })
})
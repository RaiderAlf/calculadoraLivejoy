//ELEMENTS HTML
let buttons = document.getElementsByClassName('button');
let borrar = document.querySelector('.del');
let screen = document.querySelector('#screen');
let result = document.querySelector('#result');
let equal = document.querySelector('.equal');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
        screen.textContent = screen.textContent + buttons[i].value;
    };
};

borrar.onclick = function (e) {
    result.textContent = 'Ingresa los puntos';
    screen.textContent = '';
};

equal.onclick = function (e) {
    let results = screen.innerHTML / 769;
    result.textContent = 'Total= ' + results.toFixed(2) + ' $';
};

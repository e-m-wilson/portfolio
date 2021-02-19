"use strict";


document.querySelector('#start').addEventListener('click', openPage);

function openPage () {
    document.querySelector('#splash').classList.add('removed');
    document.querySelector('#splash').addEventListener('animationend', () => {
        document.querySelector('#splash').remove();
        document.querySelector('#navBar').classList.add('fixed');
    })
}


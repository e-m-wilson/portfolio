"use strict";


document.querySelector('#start').addEventListener('click', openPage);

function openPage () {
    document.querySelector('#splash').className = 'removed';
    document.querySelector('#splash').addEventListener('animationend', () => {
        document.querySelector('#splash').remove();
        document.querySelector('#navBar').className = 'fixed';
    })
}


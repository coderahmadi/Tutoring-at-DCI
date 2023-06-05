import { counter, increCounter, decreCounter } from "./counterFile.js";


let mario = document.querySelector('#mario');
let imgMario = document.querySelector('#mario-img');
mario.style.position = 'relative';
mario.style.width = '100%';

imgMario.style.position = 'relative';

function stopMario() {
    imgMario.setAttribute('src', './assets/mario-stand.gif');
}

function moveMario(event) {


    if (imgMario.src !== './assets/mario-walk.gif') {
        imgMario.src = './assets/mario-walk.gif';
    }
    // Left Arrow key was pressed!
    if (event.keyCode === 37) {
        decreCounter();
        imgMario.style.left = (counter) + 'px';
        imgMario.style.transform = 'scaleX(-1)';
    }
    // Right Arrow key was pressed
    else if (event.keyCode === 39) {
        increCounter();
        imgMario.style.left = (counter) + 'px';
        imgMario.style.transform = 'scaleX(1)';
    }
}

document.addEventListener('keydown', e => {
    moveMario(e);
});
document.addEventListener('keyup', e => {
    stopMario();
})
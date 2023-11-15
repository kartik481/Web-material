const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;


const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', function () {
    alert('clicked')
})

const bt4 = document.querySelector('#v4');

function hit() {
    console.log('Hit me up!!');

}

function up() {
    console.log('Oh Yeah!!');

}

bt4.addEventListener('click', hit, { once: true });
bt4.addEventListener('click', up);
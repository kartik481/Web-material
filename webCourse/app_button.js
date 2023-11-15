const p1_score = document.querySelector('#p1disp');
const p2_score = document.querySelector('#p2disp');
const input = document.querySelectorAll('input');
const h1 = document.querySelector('h1');
const sub = document.querySelector('#sub');

const bt1 = document.querySelector('#player1')
const bt2 = document.querySelector('#player2')

let p1 = 0;
bt1.addEventListener('click', function () {
    p1 += 1;
    p1_score.textContent = p1;
})

let p2 = 0;
bt2.addEventListener('click', function () {
    p2 += 1;
    p2_score.textContent = p2;
})


let p1_name = '';
let p2_name = '';
function addTxt() {
    const txt = this.value;
    if (this == input[0]) {
        p1_name = txt;
    }
    else {
        p2_name = txt;
    }





}
for (let i of input) {
    i.addEventListener('input', addTxt);
    console.log(input[0])
}
sub.addEventListener('click', function () {
    for (let i of input) {
        i.classList.toggle('hide');
    }
    sub.innerText = 'Change Again?';
    h1.innerText = `${p1_name} vs ${p2_name}`;

})





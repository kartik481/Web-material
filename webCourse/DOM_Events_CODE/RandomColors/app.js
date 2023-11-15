const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
const input = document.querySelector('input')


// input.addEventListener('keydown', function () {

//     console.log('KeyDown!!');
// })

// input.addEventListener('keyup', function () {

//     console.log('KeyUp!!');
// })
input.addEventListener('keydown', function (e) {
    console.log(e.key);
    console.log(e.code)
})

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('up!');
        default:
            console.log('Igonred!!')
    }

})

btn.addEventListener('click', colorize)

h1.addEventListener('click', colorize)

function randomcolor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    h1.innerText = `rgb(${r}, ${g}, ${b})`;
    return `rgb(${r}, ${g}, ${b})`;
}

function colorize() {
    const newColor = randomcolor();
    this.style.backgroundColor = newColor;
    document.body.style.backgroundColor = newColor;

}



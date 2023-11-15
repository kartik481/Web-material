// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i < 151; i++) {
    const pok = document.createElement('div');
    pok.classList.add('pokemon')
    const span = document.createElement('span');
    span.innerText = `#${i}`;
    const img = document.createElement('img');
    img.src = `${baseURL}${i}.png`

    pok.appendChild(img)
    pok.appendChild(span)

    container.appendChild(pok)
}
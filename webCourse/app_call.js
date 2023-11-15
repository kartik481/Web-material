
const btn = document.querySelector('button');
const list = document.querySelector('#list');
const form = document.querySelector('#searchform');


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let q = form.elements.query.value;
    const config = { params: { q: q } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    const div = document.createElement('div');
    const image = document.createElement('img');
    image.src = res.data[0].show.image.medium;
    div.append(image)
    document.body.append(image)

    console.log(res.data[0].show.image.medium)

})



const delayColor = (newColor, delay, donext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        donext && donext();
    }, delay);

}


delayColor('olive', 1000, () => {
    delayColor('red', 3000, () => {
        delayColor('yellow', 1000, () => {

        });
    })

})

//Promise

const delayC = (color, delay) => {
    return new Promise((resolve, reject) => {
        const ran = Math.random();
        setTimeout(() => {
            if (ran < 0.5) {
                document.body.style.backgroundColor = color;
                resolve('color applied!');
            }
            reject('Cannot apply the color')


        }, delay);
    })
}

delayC('cyan', 1000).then((data) => {
    console.log('cyan', data);
}).catch((err) => {
    console.log('ERRORR!!', err);

})


// // async function
async function rainbow() {
    try {
        await delayC('purple', 1000)
        await delayC('grey', 1000)
    } catch (error) {

        console.log('H! it okay to lose sometimes')
    }



}

const login = async (username, password) => {
    if (!username || !password) {
        throw "Enter the credentials"
    }
    if (username || password) {
        return "Welcome!!";
    }
}

login('hi', 'judy').then((data) => {
    console.log('Async function!!', data)
}).catch((err) => {
    console.log('Async function', err);
})

// XMLHttprequest

// const req = new XMLHttpRequest();
// req.onload = () => {
//     console.log('Page loaded!')
// }
// req.onerror = () => {
//     console.log('Page not loaded!')
// }

// req.open('GET', 'https://icanhazdadjoke.com/');
// req.send();


// fetch('https://swapi.dev/api/people/1').then((data) => {
//     console.log('Fetched data successfully');
//     const da = data.json().then(d => {
//         console.log('Json Done!!', d)
//     }).catch(err => {
//         console.log('Json not done!!', err)
//     });
//     console.log(da);
// }).catch(() => {
//     console.log('Fetched data was not success')
// })

axios.get('https://swapi.dev/api/people/1').then(res => {
    console.log(res.data);
})


const req = async function getStarWars(url) {
    try {
        const res = await axios.get(url)
        return res.data

    } catch (error) {
        return error

    }

}

const r = req('https://swapi.dev/api/people/1')
console.log(r)

const getDadjokes = async () => {
    try {
        const h = {
            headers: { 'Accept': 'application/json' }
        }
        const res = await axios.get('https://icanhazdadjoke.com/', h);
        return res.data.joke;


    } catch (error) {
        return error;
    }

}



btn.addEventListener('click', async () => {

    const joke = await getDadjokes();
    console.log(joke)
    const li = document.createElement('li')
    li.textContent = joke;
    list.append(li);



})

function makecolor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`
    }
    return color;
}

function makeInsanecolor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}


makeInsanecolor.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`

}

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.b = b;
        this.g = g;
        this.name = name

    }
    rgb() {
        return `Hello from ${this.name}!!!`;

    }

}

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    eat() {
        return `${this.name} says Hiiiii!!`
    }
}

class dog extends Pet {
    bark() {
        return 'Woof, woooof!!!';
    }


}
class cat extends Pet {
    meow() {
        return 'Meow';
    }

}

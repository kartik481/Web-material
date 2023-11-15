const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
const input = document.querySelector('#f2');

const lis = document.querySelectorAll('li');

const list = document.querySelector('#cats')

form1.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Submitted')
})

form2.addEventListener("submit", function (e) {
    e.preventDefault();
    const newName = input.value;
    const li = document.createElement('li');
    li.innerText = newName;
    list.append(li);
    console.log(input.value)
})


list.addEventListener('click', function (e) {
    const rm = e.target;
    e.target.nodeName = 'Li' && rm.remove();
})


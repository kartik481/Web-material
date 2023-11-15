function add(a, b) {
    return a + b;
}

const pi = 3.14;

const square = (x) => {
    return x * x;
}


const math = {
    add: add,
    pi: pi,
    square: square

}
exports.math;
module.exports.add = add;
module.exports.pi = pi;
module.exports.square = square;
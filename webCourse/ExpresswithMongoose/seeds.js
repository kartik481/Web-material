const mongoose = require('mongoose');
const Product = require('./Models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => console.log('Connected!')).catch((err) => {
        console.log("Error");
    });

Product.insertMany([
    { name: "Egg plant", price: 1, category: 'vegetable' },
    { name: 'Curd', price: 4.99, category: "dairy" },
    { name: "Organic Melon", price: 2.99, category: "fruit" },
    { name: "Carrots", price: 0.99, category: "vegetable" },
    { name: "Apples", price: 1.49, category: "fruit" },
    { name: "Milk", price: 3.49, category: "dairy" }
]).then(data => {
    console.log('Inserted the data')
    console.log(data)
}).catch(err => {
    console.log(err);
});

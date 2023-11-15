const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/farmCamp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Database Connected!')).catch((err) => {
        console.log("Error", err);
    });

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Autumn', 'Winter']
    }
})


const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    product: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'product'
    }]

});

const product = mongoose.model('product', productSchema);
const farm = mongoose.model('farm', farmSchema);

// const makeUser = async () => {
//     const p = await product.insertMany([
//         { name: 'Melon', price: 2, season: 'Summer' },
//         { name: 'Grapes', price: 1.99, season: 'Summer' },
//         { name: 'Mango', price: 1, season: 'Summer' },
//         { name: 'kiwi', price: 1.5, season: 'Spring' }])

//     console.log(p);
// }
// makeUser();

const makeFarm = async () => {
    const f = new farm({ name: 'fat belly farms', city: 'Una' });
    const prod = await product.findOne({ name: 'kiwi' });
    f.product.push(prod);
    await f.save();
    console.log(f);
}

makeFarm();

farm.findOne({ name: 'kiwi' }).populate('product').then(farm =>
    console.log(farm)).catch(err => console.log(err))
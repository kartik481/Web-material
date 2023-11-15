const mongoose = require('mongoose');
const product = require('./product')
const farmSchema = new mongoose.Schema({
    name: {
        type: String
    },
    city: {
        type: String
    },
    email: {
        type: String,

    },
    product: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Product'
    }]

});

farmSchema.post('findOneAndDelete', async function (farm) {
    if (farm.product.length) {
        const r = await product.deleteMany({ _id: { $in: farm.product } })

    }
})

const farm = new mongoose.model('farm', farmSchema);

module.exports = farm;
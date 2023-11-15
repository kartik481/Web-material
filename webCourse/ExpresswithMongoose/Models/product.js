const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['fruit', 'dairy', 'vegetable']
    },
    farm: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'farm'
    }

});

const Product = new mongoose.model('Product', productSchema);

module.exports = Product;
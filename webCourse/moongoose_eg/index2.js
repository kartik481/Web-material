const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => console.log('Connected!')).catch((err) => {
        console.log("Error");
    });


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        min: [0, "Price must be greater than 0"]
    },
    onSale: {
        type: Boolean,
        default: false
    },
    category: [String],
    memory: {
        type: Number,
        enum: [128, 256, 512, 1024]
    }
});

const sellerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    }

})

productSchema.methods.greet = function () {
    console.log("Hope you found it!!!");

}

productSchema.methods.greet = function () {
    this.onSale = !this.onSale;
    return this.save;
}

productSchema.statics.firesale = function () {
    return this.updateMany({}, { onSale: true, price: 0 });
}

const product = mongoose.model("Product", productSchema);

const sellerNames = mongoose.model('seller', sellerSchema)

sellerSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`
})

// const mobile = new product({ name: "One plus 7T", price: 399 })
// mobile.save().then((data) => {
//     console.log(data);
// })

product.insertMany([
    { name: "One plus 10T", price: 599, onSale: false, category: "Android", memory: 128 },
    { name: "Samsung galaxy S23", price: 999, onSale: false, category: "Android", memory: 512 },
    { name: "Nothing phone 2", price: 565, onSale: false, category: "Android", memory: 512 }])

// product.findOneAndUpdate({ name: 'One plus 7T' }, { price: 350 }, { new: true, runValidators: true }).then(data => {
//     console.log(data);
// })

const findProd = async () => {
    const foundprod = await product.findOne({ name: 'Nothing phone 2' });
    foundprod.greet();
}

findProd();
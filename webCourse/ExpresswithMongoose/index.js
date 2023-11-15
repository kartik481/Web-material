const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const path = require('path');
const AppError = require('./appError');
const farm = require('./Models/farm');
const Product = require('./Models/product');
const flash = require('connect-flash');
const session = require('express-session');

const sessionOptions = { secret: 'this is a good secret', resave: false, saveUninitialized: false }


mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => console.log('Connected!')).catch((err) => {
        console.log("Error");
    });

const app = express();
app.use(session(sessionOptions));
app.use(flash());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use((req, res, next) => {
    res.locals.messages = req.flash('success');
    next();
})


// farm routes

app.get('/farm', async (req, res) => {
    const farms = await farm.find({})
    res.render('farm/index', { farms, messages: req.flash('success') })
})

app.post('/farm', async (req, res) => {
    const farms = new farm(req.body);
    await farms.save();
    req.flash('success', 'Successfully made a new farm')
    res.redirect('/farm')
})



app.get('/farm/new', (req, res) => {
    res.render('farm/new')
})

app.get('/farm/:id', async (req, res) => {
    const { id } = req.params;
    const f = await farm.findById(id).populate('product');
    res.render('farm/show', { farm: f })
})

app.delete('/farm/:id', async (req, res) => {
    const { id } = req.params;
    const f = await farm.findByIdAndDelete(id);
    res.redirect('/farm')
})


app.get('/farm/:id/products/new', async (req, res) => {
    const { id } = req.params
    const f = await farm.findById(id);
    res.render('products/new', { categories, farm: f })
})

app.post('/farm/:id/products', async (req, res) => {
    const { id } = req.params;
    const f = await farm.findById(id);
    const prod = new Product(req.body);
    f.product.push(prod);
    console.log(f)
    prod.farm = f;
    await f.save();
    await prod.save();
    res.redirect(`/farm/${id}`)
})


// Product routes

const categories = ['fruit', 'vegetable', 'dairy']

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const product = await Product.find({ category });
        res.render("products/index", { product, category });


    }
    else {
        const product = await Product.find({});
        res.render("products/index", { product, category: "All" });
    }


});

function asyncWarp(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(err => next(err))
    }
}

app.post('/products', asyncWarp(async (req, res, next) => {
    const prod = new Product(req.body);
    await prod.save();
    res.redirect('/products');

}));

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
});

app.get('/products/:id', async (req, res, next) => {
    const { id } = req.params;
    const re = await Product.findById(id);
    const farm = re.farm;
    if (!re) {
        return next(new appError('Is not present in the database', 404));
    }
    res.render("products/show", { product: re, farm });
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const re = await Product.findById(id);
    res.render("products/edit", { product: re });
})

app.put('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const prod = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
        res.redirect(`/products/${prod._id}`);

    }
    catch (err) {
        next(err);

    }

})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const prod = await Product.findByIdAndDelete(id);
    res.redirect('/products')


})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
})







app.listen('3000', () => {
    console.log('Working on port 3000');
})


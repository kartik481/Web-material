const express = require('express');
const app = express();
const AppError = require('./appError')
const morgan = require('morgan');

const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(session({ secret: "thisismysecret", resave: false, saveUninitialized: false }))
app.use(cookieParser('thisismysecret'));
app.use(morgan('common'));

app.get('/viewcounts', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    }
    else {
        req.session.count = 1;
    }
    res.send(`you have viewes this page ${req.session.count} times!!`)

})

app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet');
})




app.use((req, res, next) => {
    req.requestTime = Date.now();
    req.method = 'GET';
    console.log(req.method, req.path);
    next();
})





app.get('/', (req, res) => {
    console.log(req.requestTime)
    res.send('Home page')
})

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Hi! how you doing?, ${username}`);
})

app.get('/setname', (req, res) => {
    res.cookie("name", "chicks");
    res.send("sent you a cookie")
})
app.get('/getSigned', (req, res) => {
    res.cookie('fruit', 'grapes', { signed: true });
    res.send("Ok signed your secret")


})

app.get('/verifycookie', (req, res) => {
    res.send(req.signedCookies)
})

app.get('/dogs', (req, res) => {
    res.send('Woof Woof!!');
})

app.get('/error', (req, res) => {
    throw new Error('Cannot find the function');
})

// app.use((err, req, res, next) => {
//     console.log(err)
//     next(err)
// })

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
})

app.listen('3000', () => {
    console.log("Listening on Port 3000!")
})
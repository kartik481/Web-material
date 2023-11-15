const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const userData = require('./models/users');
const session = require('express-session');

const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/userloginExmaple').
    catch(error => handleError(error));

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))

const sessionConfig = {
    secret: 'manchesterUnited',
    resave: false,
    saveUninitialized: false,
}
app.use(session(sessionConfig));

const hashPassword = async (pw) => {

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pw, 12);
    console.log(salt);
    console.log(hash)

}
const verify = async (pw, hash) => {
    const result = await bcrypt.compare(pw, hash);
    if (result) {
        console.log('Same')
    }
    else {
        console.log('Does not match')
    }

}

//hashPassword('monkey')

verify('monkey', '$2b$10$1AktdYgJwpu5SB22.ldVneVjhzAV0LrE4bms6nBCtIBr4n3Sz0mLG');

const requireLogin = (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    next();
}

app.get('/register', (req, res) => {
    res.render('register');

})

app.get('/greet', async (req, res) => {
    const users = await userData.find({});
    res.render('greet', { users });
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await userData.findOne({ username });
    if (!user) {
        res.send('Username does not exists!')
    }
    else {
        const validpw = await bcrypt.compare(password, user.password);
        if (validpw) {
            req.session.userId = user._id
            res.render('secret')

        }
        else {
            res.send("Incorrect password");
        }


    }


})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const resultpw = await bcrypt.hash(password, 12);
    const user = new userData({
        username, password: resultpw
    })
    await user.save();
    req.session.userId = user._id

    res.redirect('/greet');

})

app.post('/logout', (req, res) => {
    req.session.userId = null;
    req.session.destroy();
    res.redirect('/login')
})

app.get('/secret', (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    res.render('secret')
})

app.listen('3000', () => { `Server running on port ${3000} 🔥` }
);


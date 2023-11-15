const express = require('express');
const app = express();
const path = require('path')
const redditData = require('./data.json')
// Setting up ejs
app.set('view engine', 'ejs')
// setting up views
app.set('views', path.join(__dirname, '/views'))
// Static files
app.use(express.static('public'))

// app.use((req, res) => {
//     console.log("New request!!");
//     res.send("Hello we got your request!!")
// })

app.get('/', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('home.ejs', { num: num, name: 'Home' })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];

    res.render('subreddit', { ...data })
})

app.get('/cat', (req, res) => {
    const cats = ['Katie', 'Blackie', 'Sadie', 'Henry'];

    res.render("cats", { cats, name: 'cats' })
})


app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>Search resuts for ${q} are:</h1>`)
})


app.get('*', (req, res) => {
    console.log("This page is not available!")
})
app.listen(8000, () => {
    console.log("We are killing it!!");
})
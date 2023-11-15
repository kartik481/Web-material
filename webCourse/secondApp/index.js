const express = require('express');
const app = express();
const path = require('path');
var methodOverride = require('method-override')
const { v4: uuid } = require('uuid');
app.use(methodOverride('_method'))



app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let comments = [{
    id: uuid(),
    username: "Kartik",
    comment: "Manchester united are really playing shit!!"
},
{
    id: uuid(),
    username: "Kunal Khatri",
    comment: "Business if good to be honest"

},
{
    id: uuid(),
    username: "Yannis",
    comment: "I'm gonna do a Phd!!"
},
{
    id: uuid(),
    username: "Julia",
    comment: "I'm getting big bucks!!"
}
]

app.get('/comments', (req, res) => {
    res.render("comment/comments", { comments });

})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ id: uuid(), username, comment });
    res.render("comment/comments", { comments });
});

app.get('/comments/new', (req, res) => {
    res.render('comment/newcomments');
})





app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newcomment = req.body.comment;
    console.log(id)
    const com = comments.find(c => c.id === id);
    console.log(com)
    com.comment = newcomment;


    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id == id)
    if (comment == undefined) {
        res.render('comment/notfound');
    }
    else {
        res.render('comment/show', { comment });
    }
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id != id);
    res.redirect('/comments')

});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const c = comments.find(c => c.id === id);
    if (c == undefined) {
        res.render('comment/notfound');
    }
    res.render('comment/edit', { comment: c });


});

app.listen(3000, () => {
    console.log("Port 3000 baby!!")

})
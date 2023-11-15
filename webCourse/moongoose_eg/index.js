const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/gameApp')
    .then(() => console.log('Connected!')).catch((err) => {
        console.log("Error");
    });


const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const game = mongoose.model('Game', gameSchema);


game.insertMany([{ title: "Batman Arkham knight", year: 2015, score: 10, rating: "R" },
{ title: "Spiderman", year: 2020, score: 9.8, rating: "R" },
{ title: "Fifa19", year: 2018, score: 8, rating: "R" },
{ title: "Need for speed: Most wanted", year: 2005, score: 10, rating: "R" },
{ title: "Red dead redemption", year: 2013, score: 9.5, rating: "R" }]).then((data) => {
    console.log("It worked!!")
    console.log(data);
}); s


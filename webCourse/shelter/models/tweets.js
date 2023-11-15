const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/farmCamp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Database Connected!')).catch((err) => {
        console.log("Error", err);
    });



const userSchema = new mongoose.Schema({
    username: String,
    age: Number
})


const tweetSchema = new mongoose.Schema({
    text: String,
    likes: Number,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})


const user = mongoose.model('user', userSchema);
const tweet = mongoose.model('tweet', tweetSchema);

// const makeTweets = async () => {
//     const u = new user({ username: 'snabnack', age: 61 })
//     const tweet1 = new tweet({ text: "Omg i love sexy peopel", likes: 1000 });
//     tweet1.user = u;
//     await tweet1.save();
//     console.log(tweet1)
// }



// makeTweets();

const usertweets = async () => {
    const t = await tweet.find({}).populate('user', 'username');
    console.log(t)

}

usertweets()
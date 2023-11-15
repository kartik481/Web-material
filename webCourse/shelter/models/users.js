const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/userCamp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Database Connected!')).catch((err) => {
        console.log("Error", err);
    });

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    address: [{
        _id: { _id: false },
        city: String,
        state: String,
        country: String
    }]
})


const user = mongoose.model('User', userSchema)

const makeUser = async () => {
    const u = new user({
        first: 'Harry',
        last: 'Potter'
    })
    u.address.push({
        city: 'New york',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save();
    console.log(res);
}


makeUser();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank']
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.findAndValidate = async function (username, password) {
    const user = await this.findOne({ username });
    const result = await bcrypt.compare(password, user.password)
    return result ? user : false
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

module.exports = mongoose.model('user', userSchema);
const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String
})

// users  -> collection
mongoose.model('users', userSchema);
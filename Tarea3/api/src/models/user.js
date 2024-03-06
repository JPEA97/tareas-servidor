const { Schema, model } = require('mongoose');

const schema = new Schema({
    name:{ type: String, required: true },
    email: { type: String, required: true },
    password: {type: String, required: true},
    role: { type: String, default: 'user' }

});


module.exports = model('users', schema);
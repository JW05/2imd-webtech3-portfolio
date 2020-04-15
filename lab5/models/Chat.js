const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chatSchema = new Schema({
    text: {
        type: String,
        required : true
    },
    user: String,
    completed: Boolean
})
const Todo = mongoose.model('Todo',chatSchema);

module.exports = Todo;
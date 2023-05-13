// import mongoose
const mongoose = require('mongoose');

// create schema
const TodoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required: true
    }
})

//export schema
module.export = mongoose.model('todo',TodoItemSchema);
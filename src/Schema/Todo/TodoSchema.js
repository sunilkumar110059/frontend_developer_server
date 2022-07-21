const mongoose = require("mongoose")
const todo = new mongoose.Schema({
  name: {
        type: String,
         required: [true, 'Name is required'],
        trim: true,
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
    },
   
})

// creating new collection
const TodoSchema = new mongoose.model('TodoApi', todo)
module.exports = TodoSchema;


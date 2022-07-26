const mongoose = require("mongoose")
const tabs = new mongoose.Schema({ 
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },

    category: {
        type: String,
        required: [true, 'Category is required'],
        trim: true,
    },

    price: {
        type: String,
        required: [true, 'Price is required'],
        trim: true,
    },

    image: {
        type: String,
        required: [true, 'Image is required'],
        trim: true,
        default: "default.png"
    },

    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    }
},
    { timestamps: true }
)

// creating new collection
const TabSchema = new mongoose.model('TabApi', tabs)
module.exports = TabSchema;

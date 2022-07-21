const mongoose = require("mongoose")
const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
         required: [true, 'Name is required'],
        trim: true,
    },

    username: {
        type: String,
        required: [true, 'User Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
    },
    phone: {
        type: String,
        required: [true, 'Phone Number is required'],
        trim: true,
    },
    website: {
        type: String,
        required: [true, 'Website is required'],
        trim: true,
    },

    address: {
        street: { type: String, trim: true, required: [true, 'Street is required'] },
        suite: { type: String, trim: true, required: [true, 'Suite is required'] },
        city: { type: String, trim: true, required: [true, 'City is required'] },
        zipcode: { type: String, trim: true, required: [true, 'Zip Code is required'] },
        geo: {
            lat: { type: String, trim: true, required: [true, 'Latitude is required'] },
            lng: { type: String, trim: true, required: [true, 'Langitude is required'] }
        }
    },

    company: {
        name: { type: String, trim: true, required: [true, 'Company Name is required'] },
        catchPhrase: { type: String, trim: true, required: [true, 'Catch Phrase is required'] },
        bs: { type: String, trim: true, required: [true, 'BS is required'] }
    }


})

// creating new collection
const UserSchema = new mongoose.model('UserApi', user)
module.exports = UserSchema;


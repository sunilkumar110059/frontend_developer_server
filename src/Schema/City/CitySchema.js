const mongoose = require("mongoose")
const city = new mongoose.Schema({
   // cityname: String,

    cityname: {
        type: String,
        required: true,
    }
})

// creating new collection
const CitySchema = new mongoose.model('CityApi', city)
module.exports = CitySchema;

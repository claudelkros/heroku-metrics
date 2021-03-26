const mongoose = require('mongoose')
const Schema = mongoose.Schema
const StationsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    identificator: {
        type: String,
        required: true,
        unique: true
    },
    longitude:{
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    altitude: {
        type: String,
        required: true
    },
    rating:{
        type: String,
    }
}, {
    timestamps: true
})

const Station = mongoose.model('Station', StationsSchema)
module.exports = Station
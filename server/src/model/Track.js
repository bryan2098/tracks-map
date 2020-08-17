const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number, // vi do
        longitude: Number, // do dai
        altitude:  Number, //  do cap
        accuracy: Number, // su chinh xac
        heading: Number, // phan dau
        speed: Number //toc do
    }
})

const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        default: ''
    },
    locations: [pointSchema]
})

mongoose.model('Track', trackSchema);
const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // },
    itineraries: [{type: mongoose.Schema.Types.ObjectId, ref: 'itinerary'}]
});

module.exports = mongoose.model("city", citySchema);

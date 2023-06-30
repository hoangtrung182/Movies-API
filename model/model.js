const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    actor: [
        {
            type: String,
            required: true
        }
    ],
    publishedYear: {
        type: Number,
        required: true
    },
    genres: [
        {
            type: String
        }
    ]
})

const Movies = mongoose.model("Movie", movieSchema);

module.exports = { Movies };
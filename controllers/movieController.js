const { Movies} = require("../model/model");

const movieController = {
    // ADD MOVIE
    addMovie: async (req, res) => {
        try {
            const newBook = new Movies(req.body);
            const savedBook = await newBook.save();
            res.status(200).json(savedBook);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // GET ALL MOVIES
    getAllMovies: async (req, res) => {
        try {
            const allMovies = await Movies.find();
            res.status(200).json(allMovies);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAMovie: async (req, res) => {
        try {
            const movie = await Movies.findById(req.params.id);
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // UPDATE MOVIE
    updateMovie: async (req, res) => {
        try {
            const book = await Movies.findById(req.params.id);
            await book.updateOne({$set: req.body});
            res.status(200).json("Updated successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // DELETE MOVIE
    deleteMovie: async (req, res) => {
        try {
            await Movies.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted succesfully");
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = movieController;
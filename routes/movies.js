const router = require("express").Router();
const movieController = require("../controllers/movieController");

// ADD MOVIE
router.post('/', movieController.addMovie);

// GET ALL MOVIES
router.get('/', movieController.getAllMovies);

// GET A MOVIE
router.get('/:id', movieController.getAMovie);

// UPDATE MOVIE
router.put('/:id', movieController.updateMovie);

// DELETE MOVIE
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
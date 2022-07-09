const express = require("express");
const router = express.Router();
const moviesController = require("../controller/movies");

router.get("/get_movies/:genreId/:page", moviesController.getMovies);
router.get("/get_top", moviesController.getTopAiring);
router.get("/get_genre", moviesController.getGenre);
router.get("/get_detail/:id", moviesController.getDetail);
router.get("/get_casting/:id", moviesController.getCasting);
router.get("/get_trailer/:id", moviesController.getTrailer);
router.get("/get_search/:query", moviesController.getSearch);
router.get("/get_tvseries/:page", moviesController.getTvSeries);
router.get("/get_one_tvseries/:id", moviesController.getOneTvSeries);
router.get("/get_casting_tv/:id", moviesController.getCastingTv);
router.get("/get_trailer_tv/:id", moviesController.getTrailerTv);

module.exports = router;

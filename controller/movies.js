const axios = require("axios");
require("dotenv").config();
const apiKey = process.env.API_KEY;

module.exports = {
  getAll: async (req, res) => {
    const id = req.params.id;
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  getMovies: async (req, res) => {
    const page = req.params.page;
    const genreId = req.params.genreId;
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}&with_watch_monetization_types=flatrate`
      )
      .then((response) => {
        res.status(200).json({ data: response.data.results });
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  getGenre: async (req, res) => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        res.status(200).json({ data: response.data.genres });
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  getTopAiring: async (req, res) => {
    const page = req.params.page;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`
      )
      .then((response) => {
        res.status(200).json({ data: response.data.results });
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  getDetail: async (req, res) => {
    const id = req.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  getCasting: async (req, res) => {
    const id = req.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  getTrailer: async (req, res) => {
    const id = req.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  getSearch: async (req, res) => {
    const query = req.params.query;
    const page = req.params.page;
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`
      )
      .then((response) => {
        res.status(200).json({ data: response.data.results });
      })
      .catch((err) => {
        res.status(404).json({ message: err.messsage });
      });
  },

  getTvSeries: async (req, res) => {
    const page = req.params.page;
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
      )
      .then((response) => {
        res.status(200).json({ data: response.data.results });
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  getOneTvSeries: async (req, res) => {
    const id = req.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  getCastingTv: async (req, res) => {
    const id = req.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  getTrailerTv: async (req, res) => {
    const id = req.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  },
};

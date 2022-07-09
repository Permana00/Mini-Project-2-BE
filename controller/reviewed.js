const { Reviewed } = require("../helper/relation");

module.exports = {
  createReviewed: async (req, res) => {
    const data = await Reviewed.create({
      userId: req.body.userId,
      moviesId: req.body.moviesId,
      image: req.body.image,
      title: req.body.title,
      date: req.body.date,
      genre: req.body.genre,
      casting: req.body.casting,
      overview: req.body.overview,
      rating: req.body.rating,
    });
    if (!data) {
      res.status(400).json({ message: "failed create reviewed" });
    } else {
      res.status(202).json({ message: "succes create reviewed", data: data });
    }
  },

  updateReviewed: async (req, res) => {
    const data = await Reviewed.update(
      {
        userId: req.body.userId,
        moviesId: req.body.moviesId,
        date: req.body.date,
        image: req.body.image,
        title: req.body.title,
        overview: req.body.overview,
        rating: req.body.rating,
        genre: req.body.genre,
        casting: req.body.casting,
      },
      {
        where: { id: req.params.id },
      }
    );
    if (!data) {
      res.status(400).json({ message: "failed update reviewed" });
    } else {
      res.status(202).json({ message: "succes update reviewed" });
    }
  },

  deleteReviewed: async (req, res) => {
    const data = await Reviewed.destroy({
      where: { id: req.params.id },
    });
    if (!data) {
      res.status(404).json({ message: "data not found" });
    } else {
      res.status(202).json({ message: "reviewed deleted" });
    }
  },

  getOneReviewed: async (req, res) => {
    const data = await Reviewed.findOne({
      where: { userId: req.params.userId, moviesId: req.params.moviesId },
    });
    if (!data) {
      res.status(404).json({ message: "data not found" });
    } else {
      res.status(202).json({ message: "succes get one reviewed", data: data });
    }
  },

  getAllReviewed: async (req, res) => {
    const data = await Reviewed.findAll({});
    if (!data) {
      res.status(404).json({ message: "data not found" });
    } else {
      res.status(202).json({ message: "succes get all reviewed", data: data });
    }
  },
};

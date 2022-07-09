const { MyList } = require("../helper/relation");

module.exports = {
  createMyList: async (req, res) => {
    const data = await MyList.create({
      userId: req.body.userId,
      moviesId: req.body.moviesId,
      title: req.body.title,
      duration: req.body.duration,
      image: req.body.image,
      date: req.body.date,
      genre: req.body.genre,
      casting: req.body.casting,
      overview: req.body.overview,
      rating: req.body.rating,
    });
    if (!data) {
      res.status(422).json({ message: "failed create mylist" });
    } else {
      res.status(202).json({ message: "succes created", data: data });
    }
  },

  deleteMyList: async (req, res) => {
    const data = await MyList.destroy({
      where: { id: req.params.id },
    });
    if (!data) {
      res.status(404).json({ message: "data not found" });
    } else {
      res.status(202).json({ message: "mylist deleted" });
    }
  },

  getOneMyList: async (req, res) => {
    const data = await MyList.findOne({
      where: { userId: req.params.userId, moviesId: req.params.moviesId },
    });
    if (!data) {
      res.status(404).json({ message: "data not found" });
    } else {
      res.status(202).json({ message: "finded one mylist", data: data });
    }
  },
};

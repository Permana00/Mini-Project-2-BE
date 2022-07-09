const { Comment } = require("../helper/relation");

module.exports = {
  createComment: async (req, res) => {
    const data = await Comment.create({
      userId: req.body.userId,
      image: req.body.image,
      name: req.body.name,
      moviesId: req.body.moviesId,
      title: req.body.title,
      text_comment: req.body.text_comment,
      rating: req.body.rating,
    });
    if (!data) {
      res.status(400).json({ message: "failed create comment" });
    } else {
      res.status(202).json({ message: "succes create comment", data: data });
    }
  },

  updateComment: async (req, res) => {
    const data = await Comment.update(
      {
        image: req.body.image,
        name: req.body.name,
        title: req.body.title,
        text_comment: req.body.text_comment,
        rating: req.body.rating,
      },
      { where: { id: req.params.id } }
    );
    if (!data) {
      res.status(400).json({ message: "failed update comment" });
    } else {
      res.status(202).json({ message: "succes update comment" });
    }
  },

  deleteComment: async (req, res) => {
    const data = await Comment.destroy({
      where: { id: req.params.id },
    });
    if (!data) {
      res.status(404).json({ message: "data not found" });
    } else {
      res.status(202).json({ message: "comment deleted" });
    }
  },

  getAllComment: async (req, res) => {
    const data = await Comment.findAll({});
    if (!data) {
      res.status(404).json({ message: "data not found" });
    } else {
      res.status(202).json({ message: "succes get all", data: data });
    }
  },

  getOneComment: async (req, res) => {
    const data = await Comment.findOne({
      where: { userId: req.params.userId, moviesId: req.params.moviesId },
    });
    if (!data) {
      res.status(404).json({ message: "data not found" });
    } else {
      res.status(202).json({ message: "succes get one comment", data: data });
    }
  },
};

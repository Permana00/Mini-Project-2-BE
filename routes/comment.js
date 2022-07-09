const express = require("express");
const router = express.Router();
const commentController = require("../controller/comment");

router.post("/create_comment", commentController.createComment);
router.put("/update_comment/:id", commentController.updateComment);
router.delete("/delete_comment/:id", commentController.deleteComment);
router.get("/get_all_comment", commentController.getAllComment);
router.get(
  "/get_one_comment/:userId/:moviesId",
  commentController.getOneComment
);

module.exports = router;

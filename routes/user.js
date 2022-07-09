const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const upload = require("../middleware/middleware");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.put("/update_user/:id", userController.update);
router.put(
  "/upload_avatar/:id",
  upload.single("image"),
  userController.uploadAvatar
);
router.get("/get_one_user/:id", userController.getOneUser);
router.get("/get_all_user", userController.getAllUser);

module.exports = router;

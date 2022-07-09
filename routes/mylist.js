const express = require("express");
const router = express.Router();
const myListController = require("../controller/mylist");

router.post(`/create_mylist`, myListController.createMyList);
router.delete(`/delete_mylist/:id`, myListController.deleteMyList);
router.get(`/get_one_mylist/:userId/:moviesId`, myListController.getOneMyList);

module.exports = router;
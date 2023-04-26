const express = require("express");
const MyteamController = require("../controllers/myteam.cntrl");
const router = express.Router();

router.get("/", MyteamController.findAll);
router.get("/:id", MyteamController.findOne);
router.post("/", MyteamController.create);
router.patch("/:id",MyteamController.update);
router.delete('/:id', MyteamController.destroy);

module.exports = router;
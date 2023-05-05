const express = require("express");
const courseTopiccontroller = require("../controllers/course.topic.cntrl");
const router = express.Router();

router.get("/", courseTopiccontroller.findAll);
router.get("/:id", courseTopiccontroller.findOne);
router.post("/", courseTopiccontroller.create);
router.patch("/:id",courseTopiccontroller.update);
router.delete('/:id', courseTopiccontroller.destroy);

module.exports = router;
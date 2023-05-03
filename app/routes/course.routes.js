const express = require("express");
const CourseController = require("../controllers/course.cntrl");
const router = express.Router();

router.get("/", CourseController.findAll);
router.get("/:id", CourseController.findOne);


module.exports = router;
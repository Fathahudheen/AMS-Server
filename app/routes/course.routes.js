const express = require("express");
const CourseController = require("../controllers/course.cntrl");
const router = express.Router();

router.get("/", CourseController.findAll);
router.get("/:id", CourseController.findOne);
router.post("/", CourseController.create);
router.patch("/:id",CourseController.update);
router.delete('/:id', CourseController.destroy);

module.exports = router;
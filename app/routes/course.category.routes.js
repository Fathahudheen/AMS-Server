const express = require("express");
const coursecategorycontrolls = require("../controllers/course.category.cntrl");
const router = express.Router();

router.get("/", coursecategorycontrolls.findAll);
router.get("/:id", coursecategorycontrolls.findOne);
router.post("/", coursecategorycontrolls.create);
router.patch("/:id", coursecategorycontrolls.update);
router.delete('/:id', coursecategorycontrolls.destroy);

module.exports = router;
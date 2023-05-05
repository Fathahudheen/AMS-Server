const express = require("express");
const coursetrackcontrolls = require("../controllers/course.track.cntrl");
const router = express.Router();

router.get("/", coursetrackcontrolls.findAll);
router.get("/:id", coursetrackcontrolls.findOne);
router.post("/", coursetrackcontrolls.create);
router.patch("/:id", coursetrackcontrolls.update);
router.delete('/:id', coursetrackcontrolls.destroy);

module.exports = router;
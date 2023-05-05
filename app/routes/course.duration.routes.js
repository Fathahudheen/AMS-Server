const express = require("express");
const coursedurationcontroller = require("../controllers/course.duration.cntrl");
const router = express.Router();

router.get("/", coursedurationcontroller.findAll);
router.get("/:id", coursedurationcontroller.findOne);
router.post("/", coursedurationcontroller.create);
router.patch("/:id",coursedurationcontroller.update);
router.delete('/:id', coursedurationcontroller.destroy);

module.exports = router;
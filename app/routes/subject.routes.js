const express = require("express");
const subjectcontroller = require("../controllers/subject.cntrl");
const router = express.Router();

router.get("/", subjectcontroller.findAll);
router.get("/:id", subjectcontroller.findOne);
router.post("/", subjectcontroller.create);
router.patch("/:id",subjectcontroller.update);
router.delete('/:id', subjectcontroller.destroy);

module.exports = router;
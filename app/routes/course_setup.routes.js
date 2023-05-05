const express = require("express");
const coursesetupcontroller = require("../controllers/coursesetup.cntrl");
const router = express.Router();

router.get("/", coursesetupcontroller.findAll);
router.get("/:id", coursesetupcontroller.findOne);
router.post("/", coursesetupcontroller.create);
router.patch("/:id",coursesetupcontroller.update);
router.delete('/:id', coursesetupcontroller.destroy);

module.exports = router;
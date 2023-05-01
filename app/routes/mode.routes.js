const express = require("express");
const LicenseeController = require("../controllers/mode.cntrl");
const router = express.Router();

router.get("/", LicenseeController.findAll);
router.get("/:id", LicenseeController.findOne);
router.post("/", LicenseeController.create);
router.patch("/:id", LicenseeController.update);
router.delete('/:id', LicenseeController.destroy);

module.exports = router;
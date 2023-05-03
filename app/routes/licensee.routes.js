const express = require("express");
const LicenseeController = require("../controllers/licensee.cntrl");
const router = express.Router();

router.get("/", LicenseeController.findAll);
router.get("/licensee", LicenseeController.findAllLicensee);
router.get("/licensee/count", LicenseeController.findLicenseeCount);
router.get("/:id", LicenseeController.findOne);
router.post("/", LicenseeController.create);
router.patch("/:id", LicenseeController.update);
router.delete('/:id', LicenseeController.destroy);

module.exports = router;
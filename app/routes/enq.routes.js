const express = require('express')
const EnqController = require('../controllers/enquiry.ctrl')
const router = express.Router();

router.get('/', EnqController.findAll);
router.get('/:id', EnqController.findOne);
router.post('/', EnqController.create);
router.patch('/:id', EnqController.update);
router.delete('/:id', EnqController.destroy);

module.exports = router
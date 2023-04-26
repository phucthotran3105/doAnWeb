const express = require('express');
const router = express.Router();

const pictureController = require('../app/controllers/PictureController');


router.delete('/:id', pictureController.destroy);

router.put('/:id', pictureController.update);

router.get('/:id/edit', pictureController.edit);

router.put('/:id', pictureController.update);

module.exports = router;

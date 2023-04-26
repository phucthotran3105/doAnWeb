const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');
const pictureController = require('../app/controllers/PictureController');

router.post('/photos/store', pictureController.store);

router.get('/stored/pictures', adminController.storedPicture);

router.get('/picture/:id/edit', pictureController.edit)

module.exports = router;

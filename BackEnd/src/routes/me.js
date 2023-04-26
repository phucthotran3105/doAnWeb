const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');
const Controller = require('../app/controllers/PictureController')

router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);
router.post('/courses/store', Controller.add)

module.exports = router;

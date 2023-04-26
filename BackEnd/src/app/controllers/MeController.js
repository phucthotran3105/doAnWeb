const Picture = require('../models/Picture');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Picture.find({}), Picture.countDocumentsDeleted()])
            .then(([pictures, deletedCount]) =>
                res.send( {
                    deletedCount,
                    courses: mutipleMongooseToObject(pictures),
                }),
            )
            .catch(next);
    }

    // [GET] /me/trash/courses
    // trashCourses(req, res, next) {
    //     Picture.findDeleted({})
    //         .then((pictures) =>
    //             res.render('me/trash-pictures', {
    //                 pictures: mutipleMongooseToObject(pictures),
    //             }),
    //         )
    //         .catch(next);
    // }
}

module.exports = new MeController();

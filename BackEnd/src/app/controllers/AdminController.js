const Picture = require('../models/Picture');
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');

class AdminController {

    // [GET] /courses/:slug
    show(req, res, next) {
        Picture.find({ })
                .then((picture) =>
                res.send(
                    {picture: mongooseToObject(picture)},
                ),
            )
            .catch(next);
    }

    // [GET] /admin/stored/pictures
    storedPicture(req, res, next) {
        Picture.find({ })
                .then(pictures => {
                    res.send(
                        { pictures: mutipleMongooseToObject(pictures) },
                    )
                })
            .catch(next);
    }
}

module.exports = new AdminController();

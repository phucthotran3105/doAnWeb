const Picture = require('../models/Picture');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Picture.find({})
            .then((pictures) => {
                res.send( {
                    pictures: mutipleMongooseToObject(pictures),
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();

const Picture = require('../models/Picture');
const { mongooseToObject } = require('../../util/mongoose');

class PictureController {
    
    add(req, res){
        try{
            let data = req.body
            Picture.create(data)
        }catch(e){
            console.log("Not", e)
        }
    }

    // [POST] /admin/photos/store
    store(req, res, next) {
        const formData = req.body;
        const picture = new Picture(formData);
        picture.save()
            .then(() => res.json({
                status: 200
            }))
            .catch(() => res.json({
                status: 500
            }));
    }

    // [GET] /picture/:slug
    show(req, res, next) {
        Picture.findOne({ slug: req.params.slug })
            .then((picture) =>
                res.send(
                    {picture: mongooseToObject(picture)},
                ),
            )
            .catch(next);
    }

    // [GET] /picture/create
    create(req, res, next) {
        res.send('picture/create');
    }

    // [POST] /picture/store

  
    // store(req, res, next) {
    //     // req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    //     const course = new Course(req.body);
    //     course
    //         .save()
    //         .then(() => res.send('/me/stored/picture'))
    //         .catch((error) => {});
    // }

    // [GET] /picture/:id/edit
    edit(req, res, next) {
        Picture.findById(req.params.id)
            .then((picture) =>
                res.send( {
                    picture: mongooseToObject(picture),
                }),
            )
            .catch(next);
    }

    // [PUT] /picure/:id
    update(req, res, next) {
        Picture.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.json({
                status: 201
            }))
            .catch(() => res.json({
                status: 501
            }));
    }

    // [DELETE] /picture/:id
    destroy(req, res, next) {
        Picture.deleteOne({ _id: req.params.id })
            .then(() => res.send('DELETE SUCCESS!'))
            .catch(() => res.send('DELETE FAIL!'));
    }

    // [DELETE] /picture/:id/force
    // forceDestroy(req, res, next) {
    //     Course.deleteOne({ _id: req.params.id })
    //         .then(() => res.redirect('back'))
    //         .catch(next);
    // }

    // [PATCH] /picture/:id/restore
    // restore(req, res, next) {
    //     Course.restore({ _id: req.params.id })
    //         .then(() => res.redirect('back'))
    //         .catch(next);
    // }
}

module.exports = new PictureController();

const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Picture = new mongoose.Schema(
    {
        ID: { type: String, required: true, unique: true },
        keywordsP: { type: String, required: true },
        nameP: {type: String, required: true},
        addressP: {type: String, required: true},
        priceP: {type: String, required: true},

    },
    {
        collection:"pictures"
    },
);

// mongoose.set('strictQuery', false)
// // Add plugins
// mongoose.plugin(slug);
// Picture.plugin(mongooseDelete, {
//     deletedAt: true,
//     overrideMethods: 'all',
// });

module.exports = mongoose.model('Picture', Picture);

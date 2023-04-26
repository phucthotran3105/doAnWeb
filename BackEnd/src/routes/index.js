// const newsRouter = require('./news');
// const meRouter = require('./me');
const pictureRouter = require('./picture');
const siteRouter = require('./site');
const adminRouter = require('./admin');

function route(app) {
    // app.use('/news', newsRouter);
    // app.use('/me', meRouter);
    // app.use('/courses', coursesRouter);

    app.use('/admin', adminRouter);
    app.use('/picture', pictureRouter)
    app.use('/', siteRouter);
}

module.exports = route;

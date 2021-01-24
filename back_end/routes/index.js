const productsRoute = require('./products.route');

const route = app => {
    app.use('/api', productsRoute)
}

module.exports = route;
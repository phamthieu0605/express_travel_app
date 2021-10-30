const rootRoute = require('./root.route')

function route(app) {


  app.use('/', rootRoute)
}

module.exports = route;

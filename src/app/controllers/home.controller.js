
class homeController {
  index(req, res) {
    res.render('frontend/home', { title: 'Vietnam tourism'})
  }
}

module.exports = new homeController;

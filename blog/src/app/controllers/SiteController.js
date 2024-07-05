class SiteController{

    //[Get] // New
    index(req,res) {
        res.render('home');
    }
    //[get] // New slug
    search(req,res) {
        res.render('search')
    }
}
module.exports = new SiteController;
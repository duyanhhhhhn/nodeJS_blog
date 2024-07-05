class NewsController{

    //[Get] // New
    index(req,res) {
        res.render('news');
    }
    //[get] // New slug
    show(req,res) {
        res.send('News Details')
    }
}
module.exports = new NewsController;
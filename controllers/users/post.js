// controllers/users/post.js


class Post{
    async getPage(req, res){
        const config = req.mysetting();
        config.page_title = "Post Page";
        config.route = "/users/post";

        const html = "Post page";
        res.send(html);
    }
}


export default new Post();
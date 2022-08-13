// controllers/users/post.js

import post from "../../views/users/post.jsx";


class Post{
    async getPage(req, res){
        const config = req.mysetting();
        config.page_title = "Post Page";
        config.route = "/users/post";
        config.username = (await req.mysession.get("user")).title;

        const html = await post(config);
        res.send(html);
    }
}


export default new Post();
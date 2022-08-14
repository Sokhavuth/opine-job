// controllers/users/post.js

import post from "../../views/users/post.jsx";
import postdb from "../../models/post.ts";


class Post{
    async getPage(req, res){
        const config = req.mysetting();
        config.page_title = "Post Page";
        config.route = "/users/post";
        config.username = (await req.mysession.get("user")).title;

        const html = await post(config);
        res.send(html);
    }

    async createPost(req, res){
        if((await req.mysession.get("user")).role in {'Admin':1,'Editor':1,'Author':1}){
            await postdb.createPost(req);
        }

        res.redirect("/users/post");
    }
}


export default new Post();
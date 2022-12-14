// controllers/users/post.js

import post from "../../views/users/post.jsx";
import postdb from "../../models/post.ts";


class Post{
    async getPage(req, res){
        const config = req.mysetting();
        config.page_title = "Post Page";
        config.route = "/users/post";
        config.username = (await req.mysession.get("user")).title;
        config.type = "post";
        config.count = await postdb.count(req);
        config.items = await postdb.getPosts(req, config.dasPostAmount);
        
        const html = await post(config);
        res.send(html);
    }

    async createPost(req, res){
        if((await req.mysession.get("user")).role in {'Admin':1,'Editor':1,'Author':1}){
            await postdb.createPost(req);
        }

        res.redirect("/users/post");
    }

    async editPost(req, res){
        const config = req.mysetting();
        config.page_title = "Post Page";
        config.route = "/users/post";
        config.username = (await req.mysession.get("user")).title;
        config.type = "post";
        config.count = await postdb.count(req);
        config.items = await postdb.getPosts(req, config.dasPostAmount);
        config.item = await postdb.editPost(req);
        
        const html = await post(config);
        res.send(html);
    }

    async updatePost(req, res){
        const user_role = (await req.mysession.get("user")).role;
        const userid = (await req.mysession.get("user")).id;
        const post_userid = (await postdb.editPost(req)).userid;

        if((user_role === "Admin")||(userid === post_userid)){
            await postdb.updatePost(req);
        }

        res.redirect("/users/post");
    }
}


export default new Post();
// routes/users/post.js

import { Router } from "../../deps.ts";
const router = new Router();

import post from "../../controllers/users/post.js"

router.get("/", async (req, res) => {
    if(await req.mysession.get("user")){
        post.getPage(req, res);
    }else{ 
        res.redirect("/users");
    }
});

router.post("/", async (req, res) => {
    if(await req.mysession.get("user")){
        post.createPost(req, res);
    }else{
        res.redirect("/users");
    }
});

router.get("/edit/:id", async (req, res) => {
    if(await req.mysession.get("user")){
        post.editPost(req, res);
    }else{
        res.redirect("/users");
    }
});

router.post("/edit/:id", async (req, res) => {
    if(await req.mysession.get("user")){
        post.updatePost(req, res);
    }else{
        res.redirect("/users");
    }
});


export default router;
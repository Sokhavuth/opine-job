// routes/users/post.js

import { Router } from "../../deps.ts";
const router = new Router();

import post from "../../controllers/users/post.js"

router.get("/", (req, res) => {
    if(req.mysession.get("user")){
        post.getPage(req, res);
    }else{ 
        res.redirect("/users");
    }
});


export default router;
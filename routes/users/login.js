// routes/users/login.js

import { Router } from "../../deps.ts";
const router = Router();


import login from "../../controllers/users/login.js";

router.get("/", async (req, res) => {
    if(await req.mysession.get("user")){
        res.redirect("/users/post");
    }else{ 
        login.getForm(req, res);
    }
});

router.post("/", (req, res) => {
    login.checkUser(req, res);
});

router.get("/logout", async (req, res) => {
    if(await req.mysession.get("user")){
        await req.mysession.set("user", null);
        res.redirect("/users");
    }else{
        res.redirect("/users");
    }
})



export default router;
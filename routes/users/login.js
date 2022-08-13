// routes/users/login.js

import { Router } from "../../deps.ts";
const router = Router();


import login from "../../controllers/users/login.js";

router.get("/", (req, res) => {
    if(req.mysession.get("user")){
        res.redirect("/users/post");
    }else{ 
        login.getForm(req, res);
    }
});

router.post("/", (req, res) => {
    login.checkUser(req, res);
});



export default router;
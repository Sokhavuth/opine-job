// routes/users/login.js

import { Router } from "../../deps.ts";
const router = Router();


import login from "../../controllers/users/login.js";

router.get("/", (req, res) => {
    login.getForm(req, res);
});

router.post("/", (req, res) => {
    login.checkUser(req, res);
});



export default router;
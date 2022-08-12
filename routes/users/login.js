import { Router } from "../../deps.ts";
const router = Router();


import login from "../../controllers/users/login.js";

router.get("/", async (req, res, next) => {
    const html = await login.getForm(req)
    res.send(html);
});


export default router;
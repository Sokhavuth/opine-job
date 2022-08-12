import { Router } from "../deps.ts";
const router = Router();


import login from "./users/login.js";
router.use("/", login);


export default router;
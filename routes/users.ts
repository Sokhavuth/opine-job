// routes/users.ts

import { Router } from "../deps.ts";
const router = Router();


import login from "./users/login.js";
router.use("/", login);

import post from "./users/post.js";
router.use("/post", post);


export default router;
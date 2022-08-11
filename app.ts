// app.ts

import {
  dirname,
  fromFileUrl,
  join,
  json,
  opine,
  serveStatic,
  urlencoded,
} from "./deps.ts";

import indexRouter from "./routes/index.ts";
import usersRouter from "./routes/users.ts";

const app = opine();

import { setting, mydb, myredis } from "./setting.js";
app.use(async (req, res, next) => {
    req.mydb = await mydb;
    req.myredis = await myredis;
    req.mysetting = await setting;
    next();
});

const __dirname = fromFileUrl(dirname(import.meta.url));

// Handle different incoming body types
app.use(json());
app.use(urlencoded());

// Serve our static assets
app.use(serveStatic(join(__dirname, "public")));

// Mount our routers
app.use("/", indexRouter);
app.use("/users", usersRouter);  

export default app;

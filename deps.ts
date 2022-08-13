// deps.ts

export {
    dirname,
    fromFileUrl,
    join,
} from "https://deno.land/std@0.151.0/path/mod.ts";

export {
    json,
    opine,
    Router,
    serveStatic,
    urlencoded,
} from "https://deno.land/x/opine@2.2.0/mod.ts";

export { config } from "https://deno.land/std@0.147.0/dotenv/mod.ts";
export { Bson, MongoClient } from "https://deno.land/x/mongo@v0.30.1/mod.ts";
export { connect } from 'https://deno.land/x/redis@v0.26.0/mod.ts';
export { OpineSession, RedisStore } from "https://deno.land/x/sessions@v1.5.4/mod.ts";

export { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.33/mod.ts";

import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.0/mod.ts"
export { bcrypt }
import {
    hash as hashPromise,
    hashSync,
    compare as comparePromise,
    compareSync,
} from "https://deno.land/x/bcrypt/mod.ts";
export const isRunningInDenoDeploy = Deno.permissions?.query === undefined; 
export const hash: typeof hashPromise = isRunningInDenoDeploy
  ? (plaintext: string, salt: string | undefined = undefined) =>
      new Promise((res) => res(hashSync(plaintext, salt)))
  : hashPromise;
export const compare: typeof comparePromise = isRunningInDenoDeploy
  ? (plaintext: string, hash: string) =>
      new Promise((res) => res(compareSync(plaintext, hash)))
  : comparePromise;

// setting.js

function setting(){
    const configure = {
        site_title: "Ever Job",
        page_title: "Home",
        message: "",
        dasPostAmount: 10,
        homePostAmount: 12,
    }

    return configure
}


import { config } from "./deps.ts";
await config({export: true});
 
 
import { MongoClient } from "./deps.ts";
const client = await new MongoClient();
await client.connect(Deno.env.get('DATABASE_URI'));
const mydb = client.database(Deno.env.get('DB_NAME'));
 
 
import { connect } from "./deps.ts"
const myredis = await connect({
    hostname: Deno.env.get('REDIS_URI'),
    port: parseInt(Deno.env.get('REDIS_PORT')),
    password: Deno.env.get('REDIS_PASSWORD'),
});


export { setting, mydb, myredis }
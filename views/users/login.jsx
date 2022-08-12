// views/users/ligon.jsx

/** @jsx h */
import { h, renderSSR } from "../../deps.ts";
import Base from "../base.jsx";


function LoginJsx(props){
    return(
        <section class="Login" >
            <link rel="stylesheet" href="/css/users/login.css" />
            <div class="wrapper">
                <div class="title">Log into the Dashboard</div>
                <form action="/login" method="post" >
                    <a>Email:</a><input type="email" name="email" 
                                    value="guest@khmerweb.app" required />
                    <a>Password:</a><input type="password" name="password" 
                                    value="rdagfyhows"  required />
                    <a></a><input type="submit" value="Submit" />
                    <a></a><div class="info">{props.data.message}</div>
                </form>
            </div>
        </section>
    )
}
   
export default function Login(props){
    props.page = LoginJsx;
    const html = renderSSR(<Base data={props} />);

    return `<!DOCTYPE html>${html}`;
}
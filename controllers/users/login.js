// controllers/users/login.js

import { bcrypt } from "../../deps.ts";
import login from "../../views/users/login.jsx";
import userdb from "../../models/user.ts";


class Login{
    async getForm(req, res){
        const config = req.mysetting();
        config.page_title = "Login Page";
        config.route = '/users/login';

        const html = await login(config);
        res.send(html);
    }

    async checkUser(req,res){
        const config = await req.mysetting();
        config.page_title = 'Login Page';
    
        const user = await userdb.checkUser(req);
        
        if(user){
            if(user.role in {'Admin':1,'Editor':1,'Author':1,"Guest":1}){
                if(await bcrypt.compareSync(req.body.password, user.password)){
                    await req.mysession.set("user", user);
                    res.redirect('/users/post');
                }else{
                    config.message = 'The password is wrong';
                    config.route = '/users';
    
                    const html = await login(config);
                    res.send(html);
                }
            }else if(user.role in {'Subscriber':1}){
                config.message = 'You are not registered yet';
                config.route = '/users';
    
                const html = await login(config);
                res.send(html);
            }else{
                config.message = 'You are not registered yet';
                config.route = '/users';
    
                const html = await login(config);
                res.send(html);
            }
        }else{
            config.message = 'The email is wrong';
            config.route = '/users';
    
            const html = await login(config);
            res.send(html);
        }
    }
}


export default new Login();
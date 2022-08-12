// controllers/users/login.js

import login from "../../views/users/login.jsx";


class Login{
    async getForm(req){
        const config = req.mysetting();
        config.page_title = "Login Page";
        config.route = '/users/login';

        return await login(config);
    }
}


export default new Login()
// models/users.ts

import { bcrypt } from '../deps.ts';


interface UserSchema {
    _id: ObjectId;
    id: string; 
    title: string;
    content: string;
    thumb: string;
    date: string;
    role: string;
    email: string;
    password: string;
}

class User{
    async createRootUser(req){
        const id = Date.now() + Math.round(Math.random() * 1E9).toString();
        const salt = await bcrypt.genSalt(8);
        const hashPassword = bcrypt.hashSync('xxxxxxxxxxx', salt);

        let newUser = {
            id: id, 
            title: 'Guest',
            content: '',
            thumb: '',
            date: '',
            role: 'Guest',
            email: 'guest@khmerweb.app',
            password: hashPassword,
        }
 
        const users = req.mydb.collection<UserSchema>("users");
        await users.insertOne(newUser);
    }

    async checkUser(req){
        const query = {email:req.body.email}
        const users = req.mydb.collection<UserSchema>("users");
        return await users.findOne(query);
    }
}


export default new User();
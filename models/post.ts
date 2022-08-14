// models/post.ts


interface PostSchema {
    _id: ObjectId;
    id: string; 
    title: string;
    content: string;
    categories: string[];
    thumb: string;
    date: string;
    userid: string;
}

class Post{
    async count(req, query={}){
        const posts = req.mydb.collection<PostSchema>("posts");
        return await posts.countDocuments(query);
    }

    async createPost(req){
        const id = crypto.randomUUID();

        let categories: string[];

        if(req.body.categories.includes(',')){
            categories = req.body.categories.split(',');
        }else{
            categories = [req.body.categories]
        }
        
        const new_post = {
            id: id, 
            title: req.body.title,
            content: req.body.content,
            categories: categories,
            thumb: req.body.thumb,
            date: req.body.datetime,
            userid: (await req.mysession.get("user")).id,
        }
 
        const posts = req.mydb.collection<PostSchema>("posts")
        await posts.insertOne(new_post)
    }
}

export default new Post();
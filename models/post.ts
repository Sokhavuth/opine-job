// models/post.ts


interface PostSchema {
    _id: ObjectId;
    id: string; 
    title: string;
    content: string;
    categories: string[];
    location: string;
    payable: string;
    postdate: Date;
    closedate: string;
    userid: string;
    thumb: string;
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
            location: req.body.location,
            payable: req.body.payable,
            postdate: new Date(),
            closedate: req.body.datetime,
            userid: (await req.mysession.get("user")).id,
            thumb: req.body.thumb,
        }
 
        const posts = req.mydb.collection<PostSchema>("posts")
        await posts.insertOne(new_post)
    }

    async getPosts(req, amount, query={}){
        const posts = req.mydb.collection<PostSchema>("posts");
        return await posts.find(query).sort({date:-1,_id:-1}).limit(amount).toArray();
    }

    async editPost(req){
        const posts = req.mydb.collection<PostSchema>("posts");
        return await posts.findOne({id: req.params.id});
    }

    async updatePost(req){
        let categories: string[];

        if(req.body.categories.includes(',')){
            categories = req.body.categories.split(',');
        }else{
            categories = [req.body.categories]
        }
        
        const edited_post = {$set:{
            title: req.body.title,
            content: req.body.content,
            categories: categories,
            location: req.body.location,
            payable: req.body.payable,
            closedate: req.body.datetime,
            thumb: req.body.thumb,
        }}

        const posts = req.mydb.collection<PostSchema>("posts");
        await posts.updateOne({id: req.params.id}, edited_post);
    }
}

export default new Post();
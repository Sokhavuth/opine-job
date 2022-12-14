// views/users/post.jsx

/** @jsx h */
import { h, renderSSR } from "../../deps.ts";
import Index from "./index.jsx";


function PostJsx(props){
    const item = props.data.item;
    let editor = ``

    if(item){
        editor = `
            <form action="/users/post/edit/${item.id}" name="form" method="post" 
                onSubmit="submitForm(event)">
                <input type="text" name="title" value="${item.title}" required 
                placeholder="Post title" />
                <textarea id="editor" name="content" >${item.content}</textarea>
                <input type="text" name="categories" value="${item.categories.toString()}" required 
                placeholder="Categories" />
                <div class="wrapper"> 
                    <select id="category" onChange="getCategory()">
                        <option>Select a category</option>
                        <option>ES6</option>
                        <option>Python</option>
                        <option>PHP</option>
                        <option>Video</option>
                    </select>
                    <input type="text" name="location" value="${item.location}" required placeholder="Location" />
                    <input type="text" name="payable" value="${item.payable}" required placeholder="Payable" />
                    <input type="datetime-local" value="${item.closedate}" name="datetime" required />
                    <input type="submit" value="Publish" />
                </div>
                <input type="text" name="thumb" value="${item.thumb}" required placeholder="Thumb" />
            </form>
        `
    }else{
        editor = `
            <form action="/users/post" name="form" method="post" onSubmit="submitForm(event)">
                <input type="text" name="title" required placeholder="Post title" />
                <textarea id="editor" name="content"></textarea>
                <input type="text" name="categories" required placeholder="Categories" />
                <div class="wrapper"> 
                    <select id="category" onChange="getCategory()">
                        <option>Slect a category</option>
                        <option>ES6</option>
                        <option>Python</option>
                        <option>PHP</option>
                        <option>Video</option>
                    </select>
                    <input type="text" name="location" required placeholder="Location" />
                    <input type="text" name="payable" required placeholder="Payable" />
                    <input type="datetime-local" name="datetime" required />
                    <input type="submit" value="Publish" />
                </div>
                <input type="text" name="thumb" required placeholder="Thumb" />
            </form>
        `
    }

    return(
        <section class="Post">
            <script src="/js/ckeditor/ckeditor.js"></script>
            <script src="/js/addCategory.js"></script>
            <link rel="stylesheet" href="/css/users/post.css" />

            <div dangerouslySetInnerHTML={{__html: `
                ${editor}
            `}}/>
          
            <script src="/js/ckeditor/config.js"></script>
        </section>
    )
}

export default function Post(props){
    props.pageInner = PostJsx;
    const html = renderSSR(<Index data={ props } />);

    return `<!DOCTYPE html>${ html }`;
}
// views/users/post.jsx

/** @jsx h */
import { h, renderSSR } from "../../deps.ts";
import Index from "./index.jsx";


function PostJsx(props){
    return(
        <section class="Post">
            Post
        </section>
    )
}

export default function Post(props){
    props.pageInner = PostJsx;
    const html = renderSSR(<Index data={ props } />);

    return `<!DOCTYPE html>${ html }`;
}
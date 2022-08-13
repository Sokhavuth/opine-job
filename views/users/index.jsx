// views/users/index.jsx

/** @jsx h */
import { h } from "../../deps.ts";
import Base from "../base.jsx";


function IndexJsx(props){
    const Page = props.data.pageInner;
    return(
        <section class="Index">
            <link rel="stylesheet" href="/css/users/index.css" />
            <header>
                <div class="inner region">
                    <div class="title">{props.data.page_title}</div>
                    <form action="/admin/search" method="post">
                        <select name="admin_search">
                            <option>All</option>
                            <option>Category</option>
                        </select>
                        <input type="text" name="admin_q" required placeholder="Search" />
                        <input type="submit" value="Search" />
                    </form>
                    <div class="logout"><span>{props.data.username}</span> | <a href="/">Home</a> | <a href="/logout">Logout</a></div>
                </div>
            </header>

            <div class="main region">
                <div class="sidebar">
                    <div class="inner">
                        <a href="/admin/post"><img src="/images/post.png" /></a>
                        <a href="/admin/post">Post</a>

                        <a href="/admin/category"><img src="/images/category.png" /></a>
                        <a href="/admin/category">Category</a>

                        <a href="/admin/upload"><img src="/images/upload.png" /></a>
                        <a href="/admin/upload">Upload</a>

                        <a href="/admin/user"><img src="/images/users.png" /></a>
                        <a href="/admin/user">User</a>

                        <a href="/admin/setting"><img src="/images/setting.png" /></a>
                        <a href="/admin/setting">Setting</a>
                    </div>
                </div>
                <div class="content">
                    <Page data={props.data} />
                </div>
            </div>

            <div class="footer region">
                <div class="info">Total amount of items: {props.data.count}</div>
                <ul class="list">
                    
                </ul>
                <div class="pagination" dangerouslySetInnerHTML={{__html: `
                    <img onclick="paginate('${props.data.route}')" src="/images/load-more.png" />
                `}}/>
            
                <div class="credit">&copy; <a href="https://khmerweb.vercel.app/">Khmer Web 2022</a></div>
            </div>
        </section>
    )
}

export default function Index(props){
    props.data.page = IndexJsx;
    return(<Base data={ props.data } />);
}
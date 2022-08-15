// views/users/index.jsx

/** @jsx h */
import { h } from "../../deps.ts";
import Base from "../base.jsx";


function IndexJsx(props){
    const Page = props.data.pageInner;
    const items = props.data.items;
    
    const listItems = items.map((item) =>
    <li>
      <a class="thumb" href={`/post/${item.id}`}>
        <img src={item.thumb} />
      </a>
      <div class="title">
        <a href={`/${props.data.type}/${item.id}`}>{item.title}</a>
        <div>{(new Date(item.closedate)).toLocaleDateString('it-IT')}</div>
      </div>
      <div class="edit">
        <a href={`/users/${props.data.type}/edit/${item.id}`}><img src={`/images/edit.png`} /></a>
        <a href={`/users/${props.data.type}/delete/${item.id}`}><img src={`/images/delete.png`} /></a>
      </div>
    </li>
    )
    
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
                    <div class="logout"><span>{props.data.username}</span> | <a href="/">Home</a> | <a href="/users/logout">Logout</a></div>
                </div>
            </header>

            <div class="main region">
                <div class="sidebar">
                    <div class="inner">
                        <a href="/users/post"><img src="/images/post.png" /></a>
                        <a href="/users/post">Post</a>

                        <a href="/users/category"><img src="/images/category.png" /></a>
                        <a href="/users/category">Category</a>

                        <a href="/users/upload"><img src="/images/upload.png" /></a>
                        <a href="/users/upload">Upload</a>

                        <a href="/users/user"><img src="/images/users.png" /></a>
                        <a href="/users/user">User</a>

                        <a href="/users/setting"><img src="/images/setting.png" /></a>
                        <a href="/users/setting">Setting</a>
                    </div>
                </div>
                <div class="content">
                    <Page data={props.data} />
                </div>
            </div>

            <div class="footer region">
                <div class="info">Total amount of items: {props.data.count}</div>
                <ul class="list">
                    { listItems }
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
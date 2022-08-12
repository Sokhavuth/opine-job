// components/base.jsx

/** @jsx h */
import { h } from "../deps.ts";


export default function Base(props){
    const Page = props.data.page;
    return(
        <html>
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, 
                    initial-scale=1.0"/>
                <title>
                    {props.data.site_title} | {props.data.page_title}
                </title>
                <link href="/images/siteLogo.png" rel="icon" />
                <link href="/css/style.css" rel="stylesheet" />
                <link href="/fonts/setup.css" rel="stylesheet" />
                <script src="/js/jquery.js"></script>
            </head>
            <body>
                <Page data={props.data} />
            </body>
        </html>
    )
  }
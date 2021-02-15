import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

 const MyPosts = (props:any) => {
    let postsElements =
         props.posts.map( (p: { message: any; likesCount: any; }) => <Post message={p.message} likesCount={p.likesCount}/>);
    return  <div className={s.postsBlock}>
        my posts
        <div>
            new posts
        </div>
        <div className={s.posts}>

            {postsElements}
        </div>
    </div>
}
export default MyPosts;












import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPost, PostType} from "../../../redux/state";

export type MyPostsPropsType = {
    posts: PostType[]
    changeText: (newPostText: string )=> void
    message: PostType[]
    likesCount: PostType[]
    addPost: () => void
}
const MyPosts = (props: MyPostsPropsType) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    //ссылка ссьлающаяся на  элемент в textarea
    //  let newPostElement = React.createRef();
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const changeTextarea = () => {
        if (newPostElement.current) {
            let text= newPostElement.current.value;
            props.changeText(text)
        }
    }

    return <div className={s.postsBlock}>
        <h3> my posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} onChange={changeTextarea}></textarea>
            </div>
            <div>
                <button onClick={props.addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>

            {postsElements}
        </div>
    </div>
}
export default MyPosts;












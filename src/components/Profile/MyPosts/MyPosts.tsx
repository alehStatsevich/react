import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionsType, PostType, StoreType} from "../../../redux/state";
import {addPostActionCreator, updateNewTextActionCreator} from "../../../redux/profile-reduser";


class newPostText {
}

export type MyPostsPropsType = {
    store:  StoreType

    dispatch: (action: ActionsType)=> void

}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElements =
        props.store._state.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    //ссылка ссьлающаяся на  элемент в textarea
    //  let newPostElement = React.createRef();
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        // @ts-ignore
        // let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator())
    }

    const changeTextarea = () => {
        if (newPostElement.current) {
            let text= newPostElement.current.value;
            let action = updateNewTextActionCreator(text)
            // @ts-ignore
            props.dispatch(action)

        }
    }

    return <div className={s.postsBlock}>
        <h3> my posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} onChange={changeTextarea}
                          value={props.store._state.profilePage.newPostText}/>
            </div>
            <div>
                <button onClick={props.store._callSubscriber}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>

            {postsElements}
        </div>
    </div>
}
export default MyPosts;
//
// posts: PostType[]
// changeText: (newPostText: string )=> void
//     message: PostType[]
// likesCount: PostType[]
//  addPost: (text: newPostText) => void
//    newPostText: string
//
//







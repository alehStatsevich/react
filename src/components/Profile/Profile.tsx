import React from "react";
import Profileinfo from "./Profileinfo/Profileinfo"

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ActionsType, StoreType} from "../../redux/state";
import store from "../../redux/redux-store";


 // type ProfilePropsType = {
 //    store:  StoreType
 //     dispatch: (action: ActionsType)=> void
 // }

const Profile = () => {
    return <div>
        <Profileinfo/>
        <MyPostsContainer/>

    </div>

}
export default Profile;
//   типизация
// posts: PostType[]
// likesCount: PostType[]
// message: PostType[]
// addPost: () => void
//     changeText: (newPostText: string) => void
//my post
// posts={props.posts}
// likesCount={props.likesCount}
// message={props.message}
// <MyPostsContainer store={props.store}
//                   dispatch={props.dispatch}/>



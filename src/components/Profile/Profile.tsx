import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo"
import {StoreType} from "../../redux/state";


type ProfilePropsType = {
    store:  StoreType


    dispatch: (action: any)=> void
}

const Profile = (props: ProfilePropsType) => {
    return <div>
        <Profileinfo/>


        <MyPosts store={props.store}
                 dispatch={props.dispatch}/>

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




import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo"

import Post from "./MyPosts/Post/Post";
import {PostType} from "../../redux/state";

type ProfilePropsType = {
    posts: PostType[]
    likesCount: PostType[]
    message: PostType[]
    addPost: () => void
    changeText: (newPostText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return <div>
        <Profileinfo/>


        <MyPosts posts={props.posts}
                 likesCount={props.likesCount}
                 message={props.message}
                 addPost={props.addPost}
                 changeText={props.changeText}/>

    </div>

}
export default Profile;










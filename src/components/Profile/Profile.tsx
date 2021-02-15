import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo"
const Profile =(props: any) => {
    return <div>
        <Profileinfo/>
       
       
       <MyPosts posts={props.posts}/>

    </div>

}
export default Profile;










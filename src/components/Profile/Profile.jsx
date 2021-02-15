 import React from 'react';
import MyPosts from './MyPosts/MyPosts';
 import s from './Profile.module.css';
 const Profile = () => {
     return   <div className={s.content}>
     <div>
     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU '/>
     </div>
     <div>
       ava=decc
     </div>
     <MyPosts/>
     </div>
     
 }
 export default Profile;
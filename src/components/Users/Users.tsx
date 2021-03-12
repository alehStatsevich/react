import React from 'react'
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import  axios from "axios";
import userPhoto from "../../assets/images/user.png"






function Users (props: UsersPropsType) {
    let getUsers = () => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

            props.setUsers(response.data.items)
        });
    }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
props.users.map( u => <div key={u.id}>
    <span>
        <div>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.usersPhoto}/>
        </div>
        <div>
            {u.followed
            ?<button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                : <button onClick={()=> {props.follow(u.id)}}>Follow</button>}

        </div>
    </span>
    <span>
        <span>
        <div>{u.fullName}</div>
        <div>{u.status}</div>
    </span>
    <span>
        <div>{'u.location.country'}</div>
        <div>{'u.location.city'}</div>
    </span>

</span>
</div>)
    }
    </div>
}

export default Users;

// [
//     {id: 1,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujODEKwrdvmj6jufsQRsId0hv3Wr6vfppsA&usqp=CAU',
//         followed:false, fullName: "Dima", status: "Hello",location:{city:"Minsk", country: "Belarus"}},
//     {id: 2,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBR5SL43JjDN9N0r_q0FLWhi1WSTq1nDi_Q&usqp=CAU',
//         followed:false, fullName: "Eska", status: "Hello",location:{city:"Brest", country: "Belarus"}},
//     {id: 3,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3DxknKrLBlFGLEtUQmCbc0adqoOYc0VLYQ&usqp=CAU',
//         followed:true,fullName: "Leonid", status: "Hello",location:{city:"Lida", country: "Belarus"}}
// ]
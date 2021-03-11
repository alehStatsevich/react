import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {followAC, initialStateType, setUsersAC, UserType} from "../../redux/users-reduser";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    users:  UserType[]
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) =>void
    setUsers:(users: UserType[]) =>void
}
export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state:  AppStateType):MapStatePropsType => {
    return {

       users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
            //диспатчим результат работы followAC
        },
        unfollow: (userId: number) => {
            dispatch(followAC(userId));
        },
        setUsers:(users: UserType[]) => {
        dispatch(setUsersAC(users))}
    }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Users);
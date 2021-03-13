import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {
    followAC,
    initialStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    UserType
} from "../../redux/users-reduser";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    users:  UserType[]
    pageSize: any
    totalUsersCount:number
    currentPage: number
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) =>void
    setUsers:(users: UserType[]) =>void
    setCurrentPage: (pageNumber: number) =>void
    setTotalUsersCount: (totalCount: any) =>void

}
export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state:  AppStateType) => {
    return {

       users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) =>{
            dispatch(setCurrentPageAC (pageNumber))
        },
        setTotalUsersCount: (totalCount: number) =>{
            dispatch(setTotalUsersCountAC (totalCount))
        }
    }
}

    export default connect(mapStateToProps, mapDispatchToProps)(Users);
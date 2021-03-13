import React from 'react'
import {connect} from "react-redux";
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
import Users from "./Users";
import axios from "axios";

type MapStatePropsType = {
    users:  UserType[]
    pageSize: any
    totalUsersCount:number
    currentPage: number
    onPageChanged: any
    follow: (userId: number) => void
    unfollow: (userId: number) =>void
}
type MapDispatchToPropsType = {

     setUsers:(users: UserType[]) =>void
    setCurrentPage: (pageNumber: number) =>void
     setTotalUsersCount: (totalCount: any) =>void

}
type UsersPropsType = any
    //MapStatePropsType & MapDispatchToPropsType

class UsersContainer extends React.Component <UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} 
        &count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    onPageChanged = (pageNumber: any) => {
        this.props.setCurrentPage (pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} 
        &count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }
    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
         />
    }}

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

    export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
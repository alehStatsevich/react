import {combineReducers, createStore} from "redux";
import {addPostActionCreator, profileReducer, updateNewTextActionCreator} from "./profile-reduser";
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reduser";
import usersReducer, {followAC, setCurrentPageAC, setUsersAC, unfollowAC} from "./users-reduser";

export type ActionsType =
    addPostType
    |sendMessageType
    |updateNewMessageBodyType
    |updateNewText
    |followType
    |unfollowType
    |setUsersType
    |setCurrentPageType
export type  addPostType = ReturnType<typeof addPostActionCreator>
export type sendMessageType = ReturnType<typeof sendMessageCreator>
export type updateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyCreator>
export type updateNewText = ReturnType<typeof updateNewTextActionCreator>
export type followType = ReturnType<typeof followAC>
export type unfollowType = ReturnType<typeof unfollowAC>
export type setUsersType = ReturnType<typeof setUsersAC>
export type setCurrentPageType = ReturnType<typeof setCurrentPageAC>


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});
export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer);


export default store;
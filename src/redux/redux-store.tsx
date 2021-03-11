import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reduser";
import {dialogsReducer} from "./dialogs-reduser";
import usersReducer from "./users-reduser";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});
export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer);


export default store;
import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reduser";
import {dialogsReducer} from "./dialogs-reduser";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});
let store = createStore(reducers);


export default store;
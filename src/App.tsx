import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import  {ActionsType, StateType, StoreType} from "./redux/state";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import store from "./redux/redux-store";


// type StatePropsType = {
//     state: StateType
//     addPost: () => void;
//     changeText: (newPostText: string) => void;
// }
// type PropsType = {
//     store:  StoreType
//     dispatch:  (action: ActionsType )=> void
// }

function App () {
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}/>
                    <Route path='/profile'
                           render={() => <Profile/>}/>

                </div>

            </div>

    );
}

export default App;
// posts={props.store.getState().profilePage.posts}
// likesCount={props.store.getState().profilePage.posts}
// message={props.store.getState().profilePage.posts}
// <DialogsContainer store={props.store}/
// <Profile store={props.store}
//          dispatch={props.store.dispatch.bind(props.store)}


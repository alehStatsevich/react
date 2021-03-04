import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import  store,{ActionsType, StateType, StoreType} from "./redux/state";


type StatePropsType = {
    state: StateType
    addPost: () => void;
    changeText: (newPostText: string) => void;
}
type PropsType = {
    store:  StoreType
    dispatch:  (action: ActionsType )=> void
}

function App (props: PropsType ) {

    console.log(props)
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs store={props.store}/>}/>
                    <Route path='/profile'
                           render={() => <Profile store={props.store}
                               dispatch={props.store.dispatch.bind(props.store)}
                           />}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
// posts={props.store.getState().profilePage.posts}
// likesCount={props.store.getState().profilePage.posts}
// message={props.store.getState().profilePage.posts}
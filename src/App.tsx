import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./redux/state";


type StatePropsType = {
    state: StateType
    addPost: () => void;
    changeText: (newPostText: string) => void
}

function App(props: StatePropsType) {
    console.log(props)
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                  messages={props.state.dialogsPage.messages}/>}/>
                    <Route path='/profile'
                           render={() => <Profile posts={props.state.profilePage.posts}
                                                  likesCount={props.state.profilePage.posts}
                                                  message={props.state.profilePage.posts}
                                                  addPost={props.addPost}
                                                  changeText={props.changeText}/>}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addPost, changeText} from "./redux/state";


// export type MessageType = {
//     id: number
//     message: string
// }
// export  type DialogType = {
//
//     id: number
//     name: string
// }
// export type PostType = {
//     id: number
//     message: string
//     likesCount: number
// }
//
//
// let posts: PostType[] = [
//     {id: 1, message: 'Hi,how are you?', likesCount: 10},
//     {id: 2, message: 'its my first post', likesCount: 18},
//     {id: 3, message: 'i knows it', likesCount: 9}
// ]
// let dialogs: DialogType[] = [
//     {id: 1, name: 'Dima'},
//     {id: 2, name: 'Andrey'},
//     {id: 3, name: 'Sveta'},
//     {id: 4, name: 'Sasha'},
//     {id: 5, name: 'Viktor'},
//     {id: 6, name: 'Valera'}
// ]
// let messages: MessageType[] = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'How is your'},
//     {id: 3, message: 'Yo'},
//     {id: 4, message: 'Yo'},
//     {id: 5, message: 'Yo'}
// ]








ReactDOM.render(
  <React.StrictMode>
      <App state={state} addPost={addPost} changeText={changeText}/>
    {/*<App posts={posts} dialogs={dialogs} messages={messages}/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import {PostType, ProfilePageType, StateType} from "./state";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT ="UPDATE-NEW-POST-TEXT";

 export const profileReducer = (state: ProfilePageType, action: any): ProfilePageType => {
    switch (action.type) {
       case ADD_POST:
          let newPost: PostType = {
             id: 5,
             message: action.newPost,
             likesCount: 0
          };
          state.posts.push(newPost);
          state.newPostText = "";
          return state;
       case UPDATE_NEW_POST_TEXT:
          state.newPostText = action.newPostText;
          return state;
       default:
          return state;
    }
 }
export const addPostActionCreator = ( newPost: string) => {
   return{type: 'ADD-POST', newPost: newPost} as const
}
export const updateNewTextActionCreator = ( newPostText: string) => {
   return {type: 'UPDATE-NEW-POST-TEXT', newPostText:  newPostText} as const
}
 // 41 урок схема
//    if (action.type === 'ADD-POST') {
//       let newPost: PostType = {
//          id: 5,
//          message: action.newPost,
//          likesCount: 0
//       };
//       state.profilePage.posts.push(newPost);
//       state.profilePage.newPostText="";
//       // this._callSubscriber();функция отрисовывает посты
//    }
//    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
//       state.profilePage.newPostText = action.newPostText
//    }
//    return state
// }

// export default profileReducer;
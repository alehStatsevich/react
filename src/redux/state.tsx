import {stringify} from "querystring";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type   DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
}
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {

    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}

   // addPost:(newPostText: string ) => void


let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi,how are you?', likesCount: 10},
            {id: 2, message: 'its my first post', likesCount: 18},
            {id: 3, message: 'i knows it', likesCount: 9}
            ],
        newPostText: ""
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
    }
}

export let addPost = (): void => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
}
export let changeText = (newPostText: string ): void => {
     state.profilePage.newPostText = newPostText
}
export default state;

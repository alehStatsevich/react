import {UsersType} from "./state";


export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS= 'SET_USERS';

 export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName:string
    status:string
    location: any
}

export type initialStateType = {
    users: UserType[]
}


let initialState: initialStateType  = {
   users: [
      {id: 1,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujODEKwrdvmj6jufsQRsId0hv3Wr6vfppsA&usqp=CAU',
          followed:false, fullName: "Dima", status: "Hello",location:{city:"Minsk", country: "Belarus"}},
      {id: 2,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBR5SL43JjDN9N0r_q0FLWhi1WSTq1nDi_Q&usqp=CAU',
          followed:false, fullName: "Eska", status: "Hello",location:{city:"Brest", country: "Belarus"}},
      {id: 3,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3DxknKrLBlFGLEtUQmCbc0adqoOYc0VLYQ&usqp=CAU',
          followed:true,fullName: "Leonid", status: "Hello",location:{city:"Lida", country: "Belarus"}}
   ]
}

 export const usersReducer = (state= initialState , action: any): initialStateType => {
    switch (action.type) {
      case FOLLOW:
         return {
           ...state,
           //делаем копию обьекта юзерс мапим если юзер ид ===action.userId(берем его из const followAC = (userId))
           // возращаем копию обьекта ...u ( {id: 1,followed:false, fullName: "Dima",) и меняем значение followed на противоположное
           //иначе возращаем не измененный обьект
           users: state.users.map(u=>{
              if(u.id=== action.userId){
                 return {...u,followed: true}
              }
              return u;
           })
        }

      case UNFOLLOW:
         return {
            ...state,
            //делаем копию обьекта юзерс мапим если юзер ид ===action.userId(берем его из const followAC = (userId))
            // возращаем копию обьекта ...u ( {id: 1,followed:false, fullName: "Dima",) и меняем значение followed на противоположное
            //иначе возращаем не измененный обьект
            users: state.users.map(u=>{
               if(u.id=== action.userId){
                  return {...u,followed: false}
               }
               return u;
            })
         }
      case SET_USERS:{
         //делаем копию стейта,берем копию старых юзеров и добавляем к ним юзеров которые пришли из action.users( const setUsersAC = (users))
         return {...state,users: [...state.users,...action.users]}
      }
       default:
          return state;
    }
 }
export const followAC = (userId: number) => {
   return{type: 'FOLLOW',userId} as const
}
export const unfollowAC = (userId: number) => {
   return {type: 'UNFOLLOW',userId} as const
}
export const setUsersAC = (users: UserType[]) => {
   return {type: 'SET_USERS',users} as const
}

 export default usersReducer;
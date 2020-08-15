import { usersAPI, profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

let initialState = {
   
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'My first post', likesCount: 8 },
            { id: 3, message: 'Blabla', likesCount: 3 },
            { id: 4, message: 'Apog', likesCount: 25 },
        ],
        // newPostText: "newPostText",
        profile: null,
        status: '123',
   
}

const profileReducer = (state = initialState, action) => {

    switch (action.type){
        case "ADD-POST": {
            let newPost = {
                id: 5,
                // message: state.newPostText,
                message: action.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = '';
            //return stateCopy;
        }
        // case "UPDATE-NEW-POST-TEXT": {
        //     return  {
        //         ...state,
        //         newPostText: action.newText,
        //     };
        //     // stateCopy.newPostText = action.newText;
        //     // return stateCopy;
        // }
        case "SET-USER-PROFILE": {
            return  {
                ...state,
                profile: action.profile,
            };
        }
        case "SET-STATUS": {
            return  {
                ...state,
                status: action.status,
            };
        }
        case "SAVE-PHOTO-SUCCESS": {
            
            return  {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        }
        default: 
            return state;

    }
}

// export const updateNewPostTextActionCreator = (text) => {    До redux-form
//     return {
//         type: 'UPDATE-NEW-POST-TEXT',
//         newText: text,
//     }
// }

// export const addPostActionCreator = (newPostText) =>{{type: 'ADD-POST', newPostText}}
// export const setUserProfile = (profile) => {{type: 'SET-USER-PROFILE', profile}}
// export const setStatus = (status) =>{{type: 'SET-STATUS', status}}
// export const savePhotoSuccess = (photos) =>{{type: 'SAVE-PHOTO-SUCCESS', photos}}
export const addPostActionCreator = (newPostText) => {         // Выше короче (вроде...)
    return {
        type: 'ADD-POST',
        newPostText
    }
}
export const setUserProfile = (profile) => {
    return {
        type: 'SET-USER-PROFILE',
        profile,
    }
}
export const setStatus = (status) =>{
    return{
        type: 'SET-STATUS',
        status,
    }
}
export const savePhotoSuccess = (photos) =>{
    return{
        type: 'SAVE-PHOTO-SUCCESS',
        photos,
    }
}

//////////////thunk
export const getUserProfile = (userId) => async (dispatch) => {
    let data = await usersAPI.getProfile(userId)

    dispatch(setUserProfile(data));

}

export const getUserStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)

    dispatch(setStatus(data));

}
export const updateUserStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)

    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }

}
export const savePhoto = (file) => async (dispatch) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }

}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    // } else {
    //     dispatch(stopSubmit('/edit-profile', { _error: data.messages[0] }));
    //     // dispatch(stopSubmit('/edit-profile', { contacts: {facebook: data.messages[0] }}));
    //     return Promise.reject()
    // }
    }else {
                let wrongNetwork = data.messages[0]    
                  .slice(    
                    data.messages[0].indexOf(">") + 1,    
                    data.messages[0].indexOf(")")    
                  )    
                  .toLocaleLowerCase();    
                dispatch(stopSubmit("/edit-profile", {contacts: {[wrongNetwork]: data.messages[0] }}) );    
                return Promise.reject(data.messages[0]);    
              }

}

export default profileReducer;


// const profileReducer = (state = initialState, action) => {         Без npm react-redux

//     switch (action.type){
//         case "ADD-POST":
//             let newPost = {
//                 id: 5,
//                 message: state.newPostText,
//                 likesCount: 0,
//             }
//             state.posts.push(newPost);
//             state.newPostText = '';
//             return state;
//         case "UPDATE-NEW-POST-TEXT":
//             state.newPostText = action.newText;
//             return state;
//         default: 
//             return state;

//     }
// }


////////////Ниже все до async await   (просто зменяем .then на await и дописываем async)
// export const getUserProfile = (userId) => (dispatch) => {
//     usersAPI.getProfile(userId)
//             .then(data => {
//                 dispatch(setUserProfile(data));
//             });
// }

// export const getUserStatus = (userId) => (dispatch) => {
//     profileAPI.getStatus(userId)
//             .then(data => {
//                 dispatch(setStatus(data));
//             });
// }
// export const updateUserStatus = (status) => (dispatch) => {
//     profileAPI.updateStatus(status)
//             .then(data => {
//                 if(data.resultCode === 0){
//                     dispatch(setStatus(status));
//                 }
//             });
// }
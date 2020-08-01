import { usersAPI, profileAPI } from "../api/api";

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
export const addPostActionCreator = (newPostText) => {
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
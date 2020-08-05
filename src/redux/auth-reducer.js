import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

let initialState = {

    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null, //if null then captcha is not required

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case "auth/SET-AUTH-USER-DATA":
        case "GET-CAPTCHA-URL-SUCCESS": {
            return {
                ...state,
                ...action.payload,


            }
        }
        //Можно как ниже, а можно как выше, чтобы не повторять один и тот же код
        // case "GET-CAPTCHA-URL-SUCCESS": {
        //     return {
        //         ...state,
        //         ...action.payload,
        //     }
        // }
        default:
            return state;

    }
}
/////////////////////
export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: 'auth/SET-AUTH-USER-DATA',
        payload: { userId, email, login, isAuth },
    }
}

export const getCaptchaUrlSuccess = (captchaUrl) => {
    return {
        type: 'GET-CAPTCHA-URL-SUCCESS',
        payload: { captchaUrl },
    }
}
/////////////////////
export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me()

    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

}


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)

    if (data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if(data.resultCode === 10){
            dispatch(getCaptcha());
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit('/login', { _error: message }));
    }

}

export const getCaptcha = () => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
    

}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}
/////Ниже все ДО async-await
// export const getAuthUserData = () => (dispatch) => {          До await (выше)
//     return authAPI.me()
//      .then(data => {

//          if(data.resultCode === 0){
//              let {id, email, login} = data.data;
//              dispatch(setAuthUserData(id, email, login, true));
//          }

//      });
//  }
// export const login = (email, password, rememberMe) => (dispatch) => {             До await (выше)
//     authAPI.login(email, password, rememberMe)
//     .then(data => {

//         if(data.resultCode === 0){
//             dispatch(getAuthUserData());
//         } else {
//             let message = data.messages.length > 0 ? data.messages[0] : "Some error";
//             dispatch(stopSubmit('/login', {_error: message}));
//         }

//     });
// }
// export const logout = () => (dispatch) => {                           До await (выше)
//     authAPI.logout()
//     .then(data => {

//         if(data.resultCode === 0){
//             dispatch(setAuthUserData(null, null, null, false));
//         }

//     });
// }

export default authReducer;


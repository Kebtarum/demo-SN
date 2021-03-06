import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { getAuthUserData } from "./auth-reducer";

let initialState = {
    
    initialized: false,
   
}

const appReducer = (state = initialState, action) => {

    switch (action.type){
        case "INITIALIZED-SUCCESS": {
            return{
                ...state,
                initialized: true,
                

            }
        }
        default: 
            return state;

    }
}

export const initializedSuccess = () => {
    return {
        type: 'INITIALIZED-SUCCESS',
    }
}

export const initializeApp = () => (dispatch) => {

    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });

}

export default appReducer;


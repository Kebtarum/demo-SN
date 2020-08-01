import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer"
import {reducer as formReducer} from 'redux-form';

const { createStore, combineReducers, applyMiddleware, compose } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,

})


//////Две строки ниже ДЛЯ ПОДКЛЮЧЕНИЯ ПЛАГИНА FIREFOX REDUX DEVTOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.__store__ = store;

export default store;
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state:{
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'My first post', likesCount: 8 },
                { id: 3, message: 'Blabla', likesCount: 3 },
                { id: 4, message: 'Apog', likesCount: 25 },
            ],
            newPostText: "newPostText",
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: "Albert" },
                { id: 2, name: "Bogdan" },
                { id: 3, name: "Vovan" },
                { id: 4, name: "Gena" },
            ],
            messagesData: [
                { id: 1, message: "Hello Albert" },
                { id: 2, message: "Privet Bogdan" },
                { id: 3, message: "Shalom Vovan" },
            ],
            newMessageBody:"",
        },

    
    },

    _callSubscriber() {
        console.log("State buf");
    },

    getState(){
        return this._state;
    }, 

    subscribe(observer) {
        this._callSubscriber = observer;
    },



    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);

    },

}






export default store;
window.store = store;
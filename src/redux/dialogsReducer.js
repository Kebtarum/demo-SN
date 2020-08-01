
let initialState = {
    
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
        
    
}

const dialogsReducer = (state = initialState, action) => {

    // let stateCopy = {
    //     ...state,
    //     //messages: [...state.messagesData]
    // };
    // //stateCopy.messagesData = [...state.messagesData];
    //let stateCopy;
    switch(action.type){
        // case "UPDATE-NEW-MESSAGE-BODY":              До redux-form
        //     return {
        //         ...state,
        //         newMessageBody: action.body,
        //     };
        //    // return stateCopy;
        //     // stateCopy = {
        //     //     ...state,
        //     //     newMessageBody: action.body,
        //     // };
        //     // return stateCopy;
        case "SEND-MESSAGE":
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 6, message: body }]
            };

            // stateCopy = {
            //     ...state,
            //     newMessageBody: '',
            //     messagesData: [...state.messagesData, { id: 6, message: body }]
            // };

            // stateCopy.messagesData.push(
            //     {
            //         id: 6,
            //         message: body,                   До npm react-redux
            //     }
            // )
            //return stateCopy;
        default:
            return state;
    }

    
}

// export const updateNewMessageBodyCreator = (body) => {           До redux-form
//     return {
//         type: 'UPDATE-NEW-MESSAGE-BODY',
//         body: body,
//     }
// }
export const sendMessageCreator = (newMessageBody) => {
    return {
        type: 'SEND-MESSAGE',
        newMessageBody,
    }
}

export default dialogsReducer;
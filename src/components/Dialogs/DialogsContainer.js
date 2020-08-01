import React from 'react'
import s from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



// function DialogsContainer(props) {

//     let state = props.store.getState().dialogsPage;


//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator());
//     };

//     let onNewMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body));
//     };

//     return (
//         <Dialogs 
//             updateNewMessageBody = {onNewMessageChange} 
//             sendMessage = {onSendMessageClick}
//             dialogsPage = {state}
//         />
//     );
// }

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,

    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        // updateNewMessageBody: (body) => {
        //     dispatch(updateNewMessageBodyCreator(body));          До redux-form
        // },
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}
///// COMPOSE заменяет все что закомменчено ниже
// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)

// export default DialogsContainer;

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
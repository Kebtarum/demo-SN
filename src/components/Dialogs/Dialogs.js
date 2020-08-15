import React from 'react'
import s from './Dialogs.module.css'
import sPlus from '../../AppPlus.module.css'
import cn from 'classnames'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import AddMessageFormRedux from './AddMessageForm/AddMessageForm'

function Dialogs(props) {

    let state = props.dialogsPage

    let dialogsElemenets = state.dialogsData.map((dialog) => (
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
    ));
    let messagesElemenets = state.messagesData.map((message) => (
        <MessageItem message={message.message} key={message.id} />
    ));


    let newMessageBody = state.newMessageBody;

    // let onSendMessageClick = () => {                         До redux-form
    //     props.sendMessage();
    //     //props.dispatch(sendMessageCreator());
    // };

    // let onNewMessageChange = (e) => {
    //     let body = e.target.value;
    //     props.updateNewMessageBody(body);
    //     //props.dispatch(updateNewMessageBodyCreator(body));
    // };

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={cn(s.dialogs,sPlus.wrapperContent)}>
            <div className={s.dialogsItem}>
                {dialogsElemenets}

            </div>
            <div className={s.messages}>
                {messagesElemenets}
            </div>
            <div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>

        </div>
    );
}

export default Dialogs;

// const AddMessageForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//             <Field component={Textarea} name='newMessageBody' 
//                     placeholder='Enter your message' validate={[required, maxLength50]}
//             />
//             </div>
//             <div>
//                 <button>Send</button>             
//             </div>
//             {/* <div>
//                 <textarea                                    //////До Field redux-form
//                     value={newMessageBody}
//                     onChange={onNewMessageChange}
//                     placeholder='Enter your message'></textarea>
//             </div>
//             <div>
//                 <button onClick={onSendMessageClick}>Send</button>
//             </div> */}
//         </form>
//     )
// }

// const AddMessageFormRedux = reduxForm({
//     form: 'dialogAddMessageForm',

// })(AddMessageForm);


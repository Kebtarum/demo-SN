import React from 'react';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { Field, reduxForm } from 'redux-form';


const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            <Field component={Textarea} name='newMessageBody' 
                    placeholder='Enter your message' validate={[required, maxLength50]}
            />
            </div>
            <div>
                <button>Send</button>             
            </div>
            {/* <div>
                <textarea                                    //////До Field redux-form
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder='Enter your message'></textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
            </div> */}
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm',

})(AddMessageForm);

export default AddMessageFormRedux;
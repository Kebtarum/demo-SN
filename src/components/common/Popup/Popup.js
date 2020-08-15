import React from 'react';
import s from './Popup.module.css'
import { reduxForm, Field } from 'redux-form';
import { createNewField, Input, FieldFile } from '../FormsControls/FormsControls';

const Popup = (props) => {
    return (
        // <div className={s.popup}>
        //     <div className={s.popupInner}>
        //         <h1>{props.text}</h1>
        //         <input type={"file"} onChange={props.onMainPhotoSelected} />
        //         <button onClick={props.onMainPhotoAdd}>close me</button>
        //         <button onClick={props.closePopup}>close me</button>
        //     </div>
        // </div>
        <form onSubmit={props.handleSubmit} className={s.popup}>
            <div className={s.popupInner}>
                <h2>Uploading new photo</h2>
                {/* {createNewField(null, 'photoFile',[], Input, { type: 'file' })} */}
                {/* <Field component={input} name={'photoFile'} type={'file'} /> */}
                {/* <input type="file" name="photoFile" onChange={() =>{}} /> */}
                <Field name="photoFile" component={FieldFile} type={"file"} />
                {/* <input type={"file"}  /> */}
                <div className={s.popupInnerItems}>
                    <div className={s.popupInnerItem}>
                        <button className={s.button} >Submit</button>
                    </div>
                    <div className={s.popupInnerItem}>
                        <button className={s.button} onClick={props.closePopup}>Close</button>
                    </div>
                </div>
            </div>
           
        </form>
      );
    }

    const PopupReduxForm = reduxForm({
        form: '/change-profile-photo',
    
    })(Popup);

export default PopupReduxForm;
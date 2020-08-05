import React, { useState } from 'react';
import { create } from 'react-test-renderer';
import { createNewField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import s from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css';


const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            {error && <div className={style.formSummeryError}>
                            {error}
            </div>}
            <div>
                <b>Full name:</b> {createNewField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job:</b>{createNewField("", "lookingForAJob", [], Input, { type: 'checkbox' })}
            </div>
            <div>
                <b>My professional skills:</b>{createNewField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me:</b>{createNewField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact} >
                        <b>{key}: </b>{createNewField(key, 'contacts.' + key, [], Input)}
                    </div>
                })}
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({
    form: '/edit-profile',

})(ProfileDataForm);

export default ProfileDataReduxForm;
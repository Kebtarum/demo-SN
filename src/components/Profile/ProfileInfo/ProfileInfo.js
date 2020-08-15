import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import sPlus from '../../../AppPlus.module.css'
import cn from 'classnames';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/userPhoto.jpg';
import ProfileDataReduxForm from './ProfileDataForm';
import PopupReduxForm from '../../common/Popup/Popup';



const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={cn(s.marginBottom, s.flexChild)}>
        {/* <b>{contactTitle}:</b>{contactValue} */}
        
        {contactValue ? 
        <a href={`${contactValue}`} target="_blank" rel="noopener noreferrer">{contactTitle}</a>
        : <span>{contactTitle}</span>
        }
        </div>
        
    )
}

const ProfileData = ({ profile, isOwner, goToEditMod, status, updateUserStatus }) => {
    return (
        <div>
            {/* {isOwner && <div><button onClick={goToEditMod}>edit</button></div>} */}

            <div>
                <span className={s.mainName}>{profile.fullName}</span>
            </div>
            <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
            <div className={s.profileInformation}>
                <div className={s.profileInformationContainer}>
                    <div className={s.marginBottom}>
                        <span><b>PROFILE INFORMATION</b></span>
                    </div>
                    <div className={s.marginBottom}>
                        <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    {profile.lookingForAJob &&
                        <div className={s.marginBottom}>
                            <b>My professional skills:</b> {profile.lookingForAJobDescription}
                        </div>
                    }
                    <div className={s.marginBottom}>
                        <b>About me:</b> {profile.aboutMe}
                    </div>
                </div>
                <div className={s.contactsContainer}>
                <div className={s.marginBottom}>
                <span><b>CONTACTS</b></span>
                </div >
                    <div className={s.flexContainer}>
                    {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProfileInfo({ isOwner, profile, status, updateUserStatus, savePhoto, saveProfile }) {

    let [editMode, setEditMode] = useState(false);
    let [showPopup, setShowPopup] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    // const onMainPhotoSelected = (e) => {
    //     if (e.target.files.length) {
    //         bufPhoto = e.target.files[0]
    //     }
    // }


    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false);
                console.log("сработал THEN")
            })
            .catch(() => {
                setEditMode(true);
                console.log("сработал CATCH")
            })

    }

    const onSubmitPhoto = (formData) => {
        // console.log(formData.photoFile[0]);
        // debugger;
        savePhoto(formData.photoFile[0]);
        setShowPopup(!showPopup);

    }

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    return (
        <div className={s.content}>
            <div className={cn(s.contentFirstItem, sPlus.wrapperContentOne)}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                {isOwner && <button className={s.button} onClick={togglePopup}>Change photo</button>}
                {/* {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />} */}
                {isOwner && <div><button className={s.button} disabled={editMode} onClick={setEditMode}>edit</button></div>}
                {showPopup ? <PopupReduxForm closePopup={togglePopup}
                    onSubmit={onSubmitPhoto}
                />
                    : null
                }
            </div>
            <div className={cn(s.contentSecondItem, sPlus.wrapperContentOne)}>
                {/* <div className={s.contentSecondItem}>
                    {profile.fullName}
                    <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
                </div> */}
                <div>
                    {editMode ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}
                        status={status} updateUserStatus={updateUserStatus}
                    />
                        : <ProfileData profile={profile} isOwner={isOwner}
                            goToEditMod={() => { setEditMode(true) }}
                            status={status} updateUserStatus={updateUserStatus}
                        />}
                </div>
            </div>



        </div>
    );
}

export default ProfileInfo;
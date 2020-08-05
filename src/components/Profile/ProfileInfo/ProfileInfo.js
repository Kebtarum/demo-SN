import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/userPhoto.jpg';
import ProfileDataForm from './ProfileDataForm';

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div><b>{contactTitle}:</b>{contactValue}</div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMod}) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMod}>edit</button></div>}
            <div>
                <b>Full name:</b> {profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}

function ProfileInfo(props) {

    let [editMode, setEditMode] = useState(false); 

    if (!props.profile) {
        return <Preloader />
    }
    
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }
    
    const onSubmit = (formData) => {
        props.saveProfile(formData)
        .then(()=>{
            setEditMode(false);
        })
        
    }

    return (
        <div className={s.discriptionBlock}>
            <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} />
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
            {editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} /> 
            : <ProfileData profile={props.profile} isOwner={props.isOwner} 
                goToEditMod={() => {setEditMode(true)}}
            />}
            
            <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
            
        </div>
    );
}

export default ProfileInfo;
import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }
    

    return (
        <div className={s.discriptionBlock}>
            <img src={props.profile.photos.large} />
            <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />



            {/* <ul>
                <li>{props.profile.contacts.facebook}</li>
                <li>{props.profile.contacts.vk}</li>
                <li>{props.profile.contacts.twitter}</li>
            </ul> */}

        </div>
    );
}

export default ProfileInfo;
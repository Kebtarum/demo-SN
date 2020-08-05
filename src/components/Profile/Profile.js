import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    return(
        <div  className={s.content}>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} 
            status={props.status} updateUserStatus={props.updateUserStatus} 
            savePhoto={props.savePhoto}
            saveProfile={props.saveProfile}
            />

            <MyPostsContainer store={props.store}  />
        </div>
    );
}

export default Profile;
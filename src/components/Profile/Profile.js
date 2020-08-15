import React from 'react';
import s from './Profile.module.css';
import sPlus from '../../AppPlus.module.css'
import cn from 'classnames';
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
            <div className={cn(s.childTwo,sPlus.wrapperContent)}>
                <MyPostsContainer store={props.store} />
            </div>
            
        </div>
    );
}

export default Profile;
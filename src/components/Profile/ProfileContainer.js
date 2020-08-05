import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile'
import { connect } from 'react-redux';
import * as axios from 'axios';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile} from '../../redux/profileReducer'
import { withRouter, Redirect } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {


    refreshProfile() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);      ////Thunk
        this.props.getUserStatus(userId);
    }

    componentDidMount() {   
      
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      
        if(this.props.match.params.userId !== prevProps.match.params.userId){
                this.refreshProfile();           
        }
    }

    render() {
        
        return (
            <div className={s.content}>
                <Profile {...this.props} 
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile} 
                status={this.props.status} updateUserStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhoto} 
                saveProfile={this.props.saveProfile}
                />
            </div>
        );
    }

}



let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}
///// COMPOSE заменяет все что закомменчено ниже
// /////// HOC
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// /////////////////
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);
import React from 'react';
import { connect } from 'react-redux';
import {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress,
    getUsersThunkCreator, followTC, unfollowTC
} from '../../redux/usersReducer';

import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

import { compose } from 'redux';
import {
    getUsers, getPageSize, getTotalUsersCount,
    getCurrentPage, getIsFetching, getFollowingInProgress
} from '../../redux/users-selectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        let { currentPage, pageSize } = this.props;
        this.props.getUsersThunkCreator(currentPage, pageSize);
        // this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize); без деструтуризации как выше
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader /> : <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    // follow={this.props.follow}           до followTC и unfollowTC
                    // unfollow={this.props.unfollow}                      
                    // toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                    followTC={this.props.followTC}
                    unfollowTC={this.props.unfollowTC}
                />}
                
            </>)
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// };
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};



///// COMPOSE заменяет все что закомменчено ниже
// export default connect (mapStateToProps,
//     {follow, unfollow, setUsers, 
//         setCurrentPage, toggleIsFetching, toggleIsFollowingProgress, setTotalUsersCount,
//         getUsersThunkCreator, followTC, unfollowTC})(UsersContainer)

export default compose(
    connect(mapStateToProps,
        {
            follow, unfollow, setUsers,
            setCurrentPage, toggleIsFetching, toggleIsFollowingProgress, setTotalUsersCount,
            getUsersThunkCreator, followTC, unfollowTC
        }),

)(UsersContainer);

    // let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPage(pageNumber));
//         },
//         // setTotalUsersCount: (totalCount) => {
//         //     dispatch(setTotalUsersCount(totalCount));
//         // },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching));
//         }
//     }
// };

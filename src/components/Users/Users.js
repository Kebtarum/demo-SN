import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


function Users(props) {

    return (
        <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
            totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} />
            {props.users.map(u =>
                <User user={u} key={u.id} followingInProgress={props.followingInProgress}
                followTC={props.followTC} unfollowTC={props.unfollowTC} />
            )}
        </div>
    );
}



export default Users;
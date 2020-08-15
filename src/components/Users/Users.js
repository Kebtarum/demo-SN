import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import cn from 'classnames'
import s from './Users.module.css'
import sPlus from '../../AppPlus.module.css'

function Users(props) {

    return (
        <div className = {cn(sPlus.wrapperContent)}>
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
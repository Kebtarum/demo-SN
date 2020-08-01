import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/userPhoto.jpg';
import { NavLink } from 'react-router-dom';



function User(props) {

    let u = props.user;

    return (
        <div>
            <div>
                <div className='avatarBlock'>
                    <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}></img>
                    </NavLink>
                </div>
                <div className='followBlock'>
                    {u.followed ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.unfollowTC(u.id);
                                // props.toggleIsFollowingProgress(true,u.id);
                                // usersAPI.unfollow(u.id)                           ///////API
                                //     .then(data => {
                                //         if (data.resultCode === 0) {
                                //             props.unfollow(u.id);
                                //         }
                                //         props.toggleIsFollowingProgress(false,u.id);
                                //     });
                            }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.followTC(u.id);
                                // props.toggleIsFollowingProgress(true,u.id);
                                // usersAPI.follow(u.id)
                                //     .then(data => {
                                //         if (data.resultCode === 0) {
                                //             props.follow(u.id);
                                //         }
                                //         props.toggleIsFollowingProgress(false,u.id);
                                //     });
                            }}>Follow</button>}
                </div>
            </div>
            <div className='userInformBlock'>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    {/* <div>{u.city}</div> */}
                    {/* <div>{u.country}</div> */}
                </div>


            </div>
        </div>

    );
}



export default User;
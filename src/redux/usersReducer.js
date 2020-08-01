import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

let initialState = {

    users: [
        // { id: 1, photoUrl: 'https://pbs.twimg.com/profile_images/1250925200129941505/fRfQZ3Uj_400x400.jpg', followed: false, fullName: 'Albert', status: 'heeey Aaalbeeert', 
        // location:{ city: 'Minsk', country: 'Belarus'} },
        // { id: 2, photoUrl: 'https://stuki-druki.com/biofoto2/ava-gardner-01.jpg', followed: true, fullName: 'Bogdan', status: 'BLM', 
        // location:{ city: 'Moscow', country: 'Russia'} },
        // { id: 3, photoUrl: 'https://thumbs.dfs.ivi.ru/storage28/contents/4/3/cb563c32cecab155a2b52d56e730b9.jpg', followed: false, fullName: 'Vovan', status: 'Sho take', 
        // location:{ city: 'Saint-Petersburg', country: 'Russia'} },

    ],
    pageSize: 10,
    totalUsersCount: 5333,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,

                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                // users: state.users.map((u) => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: true }
                //     }
                //     return u;
                // }),
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
                // users: state.users.map((u) => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: false }
                //     }
                //     return u;
                // }),
            }
        case 'SET-USERS':
            return {
                ...state,
                users: action.users,
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.count,
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;

    }
}

export const follow = (userId) => {
    return {
        type: 'FOLLOW',
        userId,
    }
}
export const unfollow = (userId) => {
    return {
        type: 'UNFOLLOW',
        userId,
    }
}
export const setUsers = (users) => {
    return {
        type: 'SET-USERS',
        users,
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,
    }
}
export const setTotalUsersCount = (totalCount) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        count: totalCount,
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching,
    }
}
export const toggleIsFollowingProgress = (isFetching, userId) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFetching,
        userId,
    }
}

export const getUsersThunkCreator = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let data = await usersAPI.getUsers(page, pageSize)

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));

}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let data = await apiMethod(userId)

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
}

export const followTC = (userId) => {
    return async (dispatch) => {
        // let apiMethod = usersAPI.follow.bind(usersAPI)
        // let actionCreator = follow;
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), follow);
    }
}
export const unfollowTC = (userId) => {
    return async (dispatch) => {
        // let apiMethod = usersAPI.unfollow.bind(usersAPI)
        // let actionCreator = unfollow;
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollow);
    }
}


export default usersReducer;


// const profileReducer = (state = initialState, action) => {         Без npm react-redux

//     switch (action.type){
//         case "ADD-POST":
//             let newPost = {
//                 id: 5,
//                 message: state.newPostText,
//                 likesCount: 0,
//             }
//             state.posts.push(newPost);
//             state.newPostText = '';
//             return state;
//         case "UPDATE-NEW-POST-TEXT":
//             state.newPostText = action.newText;
//             return state;
//         default: 
//             return state;

//     }
// }


//////До async - await
// export const followTC = (userId) => {
//     return (dispatch) => {
//         dispatch(toggleIsFollowingProgress(true,userId));
//         usersAPI.follow(userId)
//             .then(data => {
//                 if (data.resultCode === 0) {
//                     dispatch(follow(userId));
//                 }
//                 dispatch(toggleIsFollowingProgress(false,userId));
//             });
//     }
// }
// export const unfollowTC = (userId) => {
//     return (dispatch) => {
//         dispatch(toggleIsFollowingProgress(true,userId));
//         usersAPI.unfollow(userId)
//             .then(data => {
//                 if (data.resultCode === 0) {
//                     dispatch(unfollow(userId));
//                 }
//                 dispatch(toggleIsFollowingProgress(false,userId));
//             });
//     }
// }
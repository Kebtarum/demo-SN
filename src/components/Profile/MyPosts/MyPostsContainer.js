import React from 'react';
import MyPosts from './MyPosts';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer';
import {connect} from "react-redux";

// function MyPostsContainer(props) {
//     let state = props.store.getState();

//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }

//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreator(text);
//         props.store.dispatch(action);
//     }

//     return (
//         <MyPosts 
//         updateNewPostText={onPostChange} 
//         addPost={addPost} 
//         posts = {state.profilePage.posts} 
//         newPostText = {state.profilePage.newPostText}
//         />
//     );
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText, 
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // updateNewPostText: (text) => {
        //     let action = updateNewPostTextActionCreator(text);           До redux-form
        //     dispatch(action);
        // },
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        },
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
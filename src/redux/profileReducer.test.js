const { default: profileReducer, addPostActionCreator } = require("./profileReducer");
import React from 'react';

let state = {

    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'My first post', likesCount: 8 },
        { id: 3, message: 'Blabla', likesCount: 3 },
        { id: 4, message: 'Apog', likesCount: 25 },
    ],
    // // newPostText: "newPostText",
    // profile: null,
    // status: '123',

}

it('new post should be added', () => {
    //1. test data
    let action = addPostActionCreator('Slovo')
    
    //2. action
    let newState = profileReducer(state, action)

    //3. expectation   
    expect(newState.posts.length).toBe(5);
});


it('new post should be added', () => {
    //1. test data
    let action = addPostActionCreator('Slovo')
    
    //2. action
    let newState = profileReducer(state, action)

    //3. expectation   
    expect(newState.posts[4].message).toBe('Slovo');
});
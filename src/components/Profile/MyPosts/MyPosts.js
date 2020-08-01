import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);
function MyPosts(props) {

    let postsElement = props.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
        //props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        //props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div >
            <h3>My posts</h3>

            <AddNewPostReduxForm onSubmit={onAddPost} />

            {postsElement}
        </div>
    );
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText' 
                    placeholder="something" validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
            {/* <div>
                <textarea
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div> */}
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({
    form: 'profileAddNewPostForm',

})(AddNewPostForm);



export default MyPosts;
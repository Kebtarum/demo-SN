import React from 'react';
import { reduxForm, Field} from 'redux-form';
import { Input, createNewField } from '../components/common/FormsControls/FormsControls';
import { required } from '../utils/validators/validators';
import {login} from '../redux/auth-reducer'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from '../components/common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return (

        <form onSubmit={handleSubmit}>
            {createNewField("Email", "email", [required], Input)}
            {createNewField("Password", "password", [required], Input, {type: 'password'})}
            {createNewField(null, "rememberMe", null, Input, {type: 'checkbox'}, "remember me")}
            {/* <div>                   Вместо этого мы сделали функцию которая создает данный Field с дивками
                <Field component={Input} name={'email'} placeholder={"Email"} 
                    validate={[required]}
                />
            </div> */}
            {/* <div>
                <Field component={Input} name={'password'} placeholder={"Password"} 
                    validate={[required]} type={'password'}
                />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={"checkbox"} 
                />
            </div> */}
            {error && <div className={s.formSummeryError}>
                            {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>

    );
}

const LoginReduxForm = reduxForm({
    form: '/login',

})(LoginForm);

const Login = (props) => {
    
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {login})(Login);
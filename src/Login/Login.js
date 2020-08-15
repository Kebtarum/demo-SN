import React from 'react';
import { reduxForm, Field} from 'redux-form';
import { Input, createNewField } from '../components/common/FormsControls/FormsControls';
import { required } from '../utils/validators/validators';
import {login} from '../redux/auth-reducer'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from '../components/common/FormsControls/FormsControls.module.css';
import style from './Login.module.css';
import sPlus from '../AppPlus.module.css'
import cn from 'classnames';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (

        <form onSubmit={handleSubmit} className={cn(style.test) }>
            <div className={style.formItemContainer}>{createNewField("Email", "email", [required], Input)}</div>
            <div className={style.formItemContainer}>{createNewField("Password", "password", [required], Input, {type: 'password'})}</div>
            <div className={style.formItemContainerSpecial}>{createNewField(null, "rememberMe", null, Input, {type: 'checkbox'}, "remember me")}</div>
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
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createNewField("Symbols from image", "captcha", [required], Input)}
            
            {error && <div className={s.formSummeryErrorParent}>
                            <div className={s.formSummeryError}>{error} </div>
            </div>}
            <div>
                <button className={style.loginContentButton}>Login</button>
            </div>
        </form>

    );
}

const LoginReduxForm = reduxForm({
    form: '/login',

})(LoginForm);

const Login = (props) => {
    
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={cn(style.loginContent, sPlus.wrapperContent)}>
            <div className={style.loginFirstContentChild}>
                <h2>LOGIN</h2>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
            </div>
            <div className={style.loginContentSecondChild}>
                <h2>Добро пожаловать!</h2>
                <p>Данный проект был спроектирован исключительно для изучения ReactJS.</p>
                <p>Для авторизации введите почту и пароль тестового аккаунта</p>
                <h3>Email: free@samuraijs.com</h3>
                <h3>Password: free</h3>
            </div>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
    }
}

export default connect(mapStateToProps, {login})(Login);
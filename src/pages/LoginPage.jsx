import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import AppContext from '../context/AppContext';
import { login } from '../utils/api';

const LoginPage = ({loginSuccess}) => {
    const {locale} = React.useContext(AppContext);
    const onLogin = async ({email, password}) => {
        const {err, data} = await login({email, password});

        if(!err) {
            loginSuccess(data)
        }
    }
  return (
    <section className="login-page">
        <h2>{locale === 'id' ? 'Silakan Login ...' : 'Please Login'}</h2>
        <LoginInput login={onLogin}/>
        <p>{locale === 'id' ? 'Belum punya akun? daftar dulu skuy ... ' : 'Dont have an account yet? register first ...'}
            <Link to='/register' >{locale === 'id' ? 'Daftar' : 'Register'}</Link>
        </p>
    </section>
  )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired
}

export default LoginPage;
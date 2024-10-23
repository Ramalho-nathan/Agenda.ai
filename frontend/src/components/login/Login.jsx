import React from 'react'
import Button from '../Button/Button'
import Logo from '../logo/Logo'

import './login.scss'

function Login({showSignUp, email, password, onChange, onLogin, showResetPassword}) {

  return (
    <div className="login">
        <div className="top">
            <Logo />
        </div>
        <form onSubmit={onLogin}>
            <div className="input-group">
                <input type="text" name='email' value={email} onChange={onChange} required />
                <span>Email</span>
            </div>

            <div className="input-group">
                <input type="password" name='password' value={password} onChange={onChange} required />
                <span>Senha</span>
            </div>

            <div className="reset">
                <p onClick={showResetPassword}>Esqueci minha senha</p>
            </div>

            <div className="btn">
                <Button type='submit'>Entrar</Button>
            </div>
        </form>

        <div className="sign">
            <p>Ainda não possui Conta? <span onClick={showSignUp}>Cadastre-se</span></p>
        </div>
    </div>
  )
}

export default Login
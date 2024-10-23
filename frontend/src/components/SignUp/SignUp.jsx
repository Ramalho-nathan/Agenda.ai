import React from 'react'
import Button from '../Button/Button'
import Logo from '../logo/Logo'
import { FaArrowLeft } from "react-icons/fa";

import './signup.scss'
function SignUp({showLogin, name, lastname, age, number, email, password, onChange, onSignUp}) {
  return (
    <div className="signup">
        <div className="top">
            <Logo />
        </div>

        <div className="back">
            <FaArrowLeft onClick={showLogin}/>
        </div>

        <form onSubmit={onSignUp}>
            <div className="input-name">
                <div className="input-group">
                    <input type="text" name='name' value={name} onChange={onChange} required />
                    <span>Nome</span>
                </div>

                <div className="input-group">
                    <input type="text" name='lastname' value={lastname} onChange={onChange} required />
                    <span>Sobrenome</span>
                </div>
            </div>

            <div className="input-group">
                <input type="text" name='age' value={age} onChange={onChange} required />
                <span>Data de Nascimento</span>
            </div>

            <div className="input-group">
                <input type="text" name='number' value={number} onChange={onChange} required />
                <span>Celular</span>
            </div>

            <div className="input-group">
                <input type="text" name='email' value={email} onChange={onChange} required />
                <span>Email</span>
            </div>

            <div className="input-group">
                <input type="password" name='password' value={password} onChange={onChange} required />
                <span>Senha</span>
            </div>
            
            <div className="btn">
                <Button type='submit'>Cadastrar</Button>
            </div>
        </form>
    </div>
  )
}

export default SignUp
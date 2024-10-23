import React from 'react'
import Logo from '../logo/Logo'
import Button from '../Button/Button'
import { MdAlternateEmail, MdLock, MdOutlinePassword } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

import './resetpassword.scss'
function ResetPassword({nextStep, backStep,  currentStep, backToLogin}) {
  return (
    <div className="resetpassword">
        <div className="top">
            <Logo />
        </div>

        <div className="layout-step">
            <div className="step">
                <div className={`position ${currentStep >= 1 ? 'active' : ''}`}>
                    <p>1</p>
                </div>
                <div className="name-step">
                    <h1>Email</h1>
                </div>
            </div>

            <div className="step">
                <div className={`position ${currentStep >= 2 ? 'active' : ''}`}>
                    <p>2</p>
                </div>
                <div className="name-step">
                    <h1>Código</h1>
                </div>
            </div>

            <div className="step">
                <div className={`position ${currentStep === 3 ? 'active' : ''}`}>
                    <p>3</p>
                </div>
                <div className="name-step">
                    <h1>Nova Senha</h1>
                </div>
            </div>
        </div>

        <form>
            <div className="header">
                <h1>Redefinição de Senha</h1>
            </div>

            {currentStep === 1 &&(
                <div className="input-step">
                    <div className="input-group">
                        <input type="text" name='email' required/>
                        <span>Email Cadastrado</span>
                        <MdAlternateEmail className='icon-input'/>
                    </div>

                    <div className="btn">
                        <Button onClick={nextStep}>Próximo</Button>
                    </div>
                </div>
            )}

            {currentStep === 2 && (
                <div className="input-step">
                    <div className="input-group">
                        <input type="text" name='code' required/>
                        <span>Código de Segurança</span>
                        <MdLock className='icon-input'/>
                    </div>

                    <div className="btn">
                        <Button onClick={backStep}>Voltar</Button>
                        <Button onClick={nextStep}>Próximo</Button>
                    </div>
                </div>
            )}

            {currentStep === 3 &&(
                <div className="input-step">
                    <div className="input-group">
                        <input type="text" name='password' required/>
                        <span>Nova Senha</span>
                        <MdOutlinePassword className='icon-input'/>
                    </div>

                    <div className="btn">
                        <Button  type='submit'>Enviar</Button>
                    </div>
                </div>
            )}

        </form>

        <div className="backLogin" onClick={backToLogin}>
            <IoIosArrowUp className='icon-back' />
            <p>Voltar Para o Login</p>
            <IoIosArrowUp className='icon-back' />
        </div>
    </div>
  )
}

export default ResetPassword
import React, { useState } from 'react'
import Login from '../../components/login/Login'
import SignUp from '../../components/SignUp/SignUp'
import Banner from '../../components/Banner/Banner'
import ResetPassword from '../../components/ResetPassword/ResetPassword'

import './home.scss'

function Home() {

  const[moveBanner, setMoveBanner] = useState(''); //Lógica para mover o Banner que tampa o Cadastro
  const[resetPassword, setResetPassword] = useState(''); //Lógica para mover o formulário de redefinição de senha
  const[formData, setFormData] = useState({ 
    email: '',
    password: '',
    name: '',
    lastname: '',
    age: '',
    number: '',
    code: '',
    newpassword: ''
  
  }); //Responsavel pela estruturação do objeto para coletar os valores dos inputs
  const[currentStep, setCurrentStep] = useState (1);


  const handleInputChange = (e) =>{
    const{name, value} = e.target;

    setFormData({
      ...formData,[name]: value,
    });
  }; //Preenche os Campos do Objeto de forma dinamica

  const handleLogin = async(e) =>{
    e.preventDefault();
    console.log('passou', formData);
  } //Enviar os dados do Login para o Backend

  const handleSignUp = async(e) =>{
    e.preventDefault();
    console.log('passou', formData);  
  }//Enviar os dados do Cadastro para o Backend



  const showSignUp = () => { setMoveBanner('move-left'); setFormData({ ...formData, email: '', password: ''})}; //Paramentro que adiciona uma tag ao banner para mover para o lado e quando movimentado limpa os inputs
  const showLogin = () => {setMoveBanner(''); setFormData({ ...formData, email: '', password: '', lastname: '', name: '', age: '', number: ''}) }; //Parametro que volta o banner ao ponto inicial e quando movimentado limpa os inputs
  const nextStep = () => { setCurrentStep (currentStep+1);}; //Avança um step 
  const backStep = () => { setCurrentStep (currentStep-1);}; //Volta um ste
  const showResetPassword = () =>{ setResetPassword('move-up');}; //Move a Redefinição de Senha
  const backToLogin = () =>{ setResetPassword('');}; //Volta Login na redefinição de Senha

  return (
    <div className={`home ${moveBanner} ${resetPassword}`}>
          <Login
          email={formData.email} //Coleta o campo de email
          password={formData.password} //Coleta o campo de Senha
          onChange={handleInputChange} //Coleta os Valores dos inputs
          onLogin={handleLogin} //Coleta o submit do formulário
          showSignUp={showSignUp} //Faz a animação para mostrar o Cadastro
          showResetPassword={showResetPassword} //Faz a animação para mostrar o esqueci minha Senha
          />
          <SignUp
          email={formData.email} //Coleta o campo de email
          password={formData.password} //Coleta o campo de senha
          name={formData.name} //Coleta o campo de nome
          lastname={formData.lastname} //Coleta o campo de sobrenome
          number={formData.number} //Coleta o campo de numero
          age={formData.age} //Coleta o campo de idade
          onChange={handleInputChange} //Coleta os Valores dos inputs
          onSignUp={handleSignUp} //Coleta o submit do formulário
          showLogin={showLogin} //Faz a animação para mostrar o login
          />
        <Banner />
        <ResetPassword nextStep={nextStep} backStep={backStep} currentStep={currentStep} backToLogin={backToLogin} />
    </div>
  )
}

export default Home
import React from 'react';
import LoginForm from '../Components/loginForm';
import '../styles/login.css'

class Login extends React.Component{
    render(){
    return(
        <main className="main-container">
            <div className="main-content">
                <h1>Telzir</h1>
                <LoginForm/>
                <div>
                    <button type="button" className="create-login">Não possui conta? Faça seu cadastro</button>
                </div>
            </div>  
        </main>
    )
    }
}
  
export default Login;
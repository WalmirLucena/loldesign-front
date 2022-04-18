import React, {ChangeEvent} from 'react';
import { Navigate } from 'react-router-dom';
import { requestCreateUser } from '../services/request';

type MyState = {
    disabled: boolean;
    email: string;
    password: string;
    username: string;
    failedTryCreate: boolean;
    isLogged: boolean
  };

class SignUp extends React.Component <{}, MyState>{
    state = {
        email: "",
        password:"",
        disabled: true,
        username: "",
        failedTryCreate: false,
        isLogged: false
    }

    validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    handleChange = (event: ChangeEvent<{ value: string, id: string}>): void => {
        this.setState({ ...this.state,
            [event.currentTarget.id]: event.currentTarget.value });

        const {email, password, username} = this.state;
        const correctEmail = this.validateEmail(email);

        if(correctEmail && password.length>=5 && username){
            this.setState({disabled:false})
        } else {
            this.setState({disabled: true})
        }          
    }

    createNewUser = async () => {
        try {
            const endpoint = "/login/create";
            const {email, password, username} = this.state;
      
            const response = await requestCreateUser(endpoint, {email,password, username})

            if(response.username) this.setState({isLogged: true})
            localStorage.setItem('user', JSON.stringify({ username, id: response.id }));

          } catch (err) {
            this.setState({failedTryCreate: true})
          }
    }

    handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        await this.createNewUser()
        }

    render(){
        const {username,email,password, disabled, isLogged, failedTryCreate} = this.state;
        if(isLogged) return <Navigate to="/home" />
        return (
            <div className="sign-container">
            <div className="sign-content">
            <h1>Cadastre-se</h1>
            <form className="login-form" onSubmit={this.handleSubmit}>
                <div className="input-text">
                    <label htmlFor="name">
                        <span>Digite seu Nome</span>
                        <input type="text" 
                        name="name" 
                        id="username" 
                        className="input-name" 
                        value={username} 
                        placeholder="John Legend" 
                        onChange={this.handleChange} />
                    </label>
                   
                </div>
                <div className="input-email">
                <label htmlFor="email">
                        <span>Digite seu Email</span>
                        <input type="text" 
                        name="email" 
                        id="email" 
                        className="input-email" 
                        value={email} 
                        placeholder="John@email.com" 
                        onChange={this.handleChange} />
                    </label>
                </div>
                <div className="input-password">
                    <label htmlFor="name">
                        <span>Digite sua senha</span>
                        <input type="password" 
                        name="password" 
                        id="password" 
                        className="input-password" 
                        value={password} 
                        placeholder="********"  
                        onChange={this.handleChange} />
                    </label>
                </div>
            {failedTryCreate?<p className="failed-paragraph">Erro no cadastro. Verifique seus dados e tente novamente</p>: null}

                <input type="submit"
                value="Cadastrar"
                disabled={disabled}
                className={disabled? "submit-button-grey":"submit-button" }/>

            </form>
            </div>
            </div>
        )
    }
}

export default SignUp;
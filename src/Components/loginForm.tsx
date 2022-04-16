import React, {ChangeEvent} from 'react';
import { Navigate } from 'react-router-dom';
import { requestLogin } from '../services/request';

type MyState = {
    disabled: boolean;
    email: string;
    password: string;
    isLogged:boolean;
    failedTryLogin: boolean;
  };

class LoginForm extends React.Component <{}, MyState> {
    state = {
        email: "",
        password:"",
        disabled: true,
        isLogged: false,
        failedTryLogin: false
    }

    componentDidMount () {
        localStorage.clear();
    }

    changeDisabled = (): void => {
        const {password, email}= this.state;

        if(password.length >=6 && email){
            this.setState({disabled: false})
        }
    }


   handleChange = (event: ChangeEvent<{ value: string, id: string}>): void => {
    this.setState({ ...this.state,
        [event.currentTarget.id]: event.currentTarget.value });
    const {password, email}= this.state;

        if(password.length >=5 && email){
            this.setState({disabled: false})
        }
      
  }

  checkLogin = async () => {
      try {
        const endpoint = "/login";
        const {email, password} = this.state;
  
        const {username, id} = await requestLogin(endpoint, {email, password});

        if(username) this.setState({isLogged: true})
        localStorage.setItem('user', JSON.stringify({ username, id }));

      } catch (error) {
        this.setState({failedTryLogin: true})
      }
  }

   handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await this.checkLogin()
  
    }

    render(){
        const {disabled, email, password, isLogged, failedTryLogin} = this.state;
    if(isLogged) return <Navigate to="/home" />
    return (
        <form className="login-form" onSubmit={this.handleSubmit}>
                <div className="input-text">
                    <label htmlFor="email">
                        <span>Please enter your email</span>
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
                        <span>Please enter your password</span>
                        <input type="password" 
                        name="password" 
                        id="password" 
                        className="input-password" 
                        value={password} 
                        placeholder="Password"  
                        onChange={this.handleChange} />
                    </label>
                </div>
                {
                (failedTryLogin) ? 
                ( <p className="failed-paragraph">The email address or password is not correct.
                    Please try again.
                </p>) : null
                }
                
                <input type="submit"
                value="ENTER"
                disabled={disabled}
                className={disabled? "submit-button-grey":"submit-button" }/>
            </form>
    )
    }
}

export default LoginForm;
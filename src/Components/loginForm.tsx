import React, {ChangeEvent} from 'react';

type MyState = {
    disabled: boolean;
    email: string;
    password: string;
  };

class LoginForm extends React.Component <{}, MyState> {
    state = {
        email: "",
        password:"",
        disabled: true,
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
      
  }

   handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  
    }

    render(){
        const {disabled, email, password} = this.state;
    return (
        <form className="login-form" onSubmit={this.handleSubmit}>
                <div className="input-text">
                    <label htmlFor="email">
                        <span>Please enter your email</span>
                        <input type="text" name="email" id="email" className="input-email" value={email} placeholder="John@mail.com" onChange={this.handleChange} />
                    </label>
                </div>
                <div className="input-password">
                    <label htmlFor="name">
                        <span>Please enter your password</span>
                        <input type="password" name="password" id="password" className="input-password" value={password}  onChange={this.handleChange} />
                    </label>
                </div>
                
                <input type="submit"
                value="ENTER"
                disabled={disabled}
                className={disabled? "submit-button-grey":"submit-button" }/>
            </form>
    )
    }
}

export default LoginForm;
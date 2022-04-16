import React from 'react';
import '../styles/home.css';
import profileImage from "../img/user-regular.svg";
import RenderCalls from '../Components/renderCalls';
import CallsForm from '../Components/callsForm';

type MyState = {
    username: string;
    id: number;
    isLogged: boolean
}

class Home extends React.Component <{}, MyState>{
    state = {
        username: '',
        id: 0,
        isLogged: false
    }

    componentDidMount() {
        const data =  localStorage.getItem('user');
        if(data) {
            const {username, id} = JSON.parse(data);
            this.setState({username, id, isLogged:true})
        }
    }

    render(){
        const{username, id, isLogged} = this.state;
    if(isLogged)
    return(
        <main>
            <header className="home-header">
                <h1>Telzir</h1>
                <p><img className='image' src={profileImage}  alt="profile icon"/>{username}</p>
            </header>
            <CallsForm />
            <RenderCalls id={id} />

        </main>
    )
    }
}
  
export default Home;
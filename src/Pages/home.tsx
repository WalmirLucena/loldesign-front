import React from 'react';
import '../styles/home.css';
import profileImage from "../img/user-regular.svg";

type MyState = {
    username: string;
}

class Home extends React.Component <{}, MyState>{
    state = {
        username: ''
    }

    componentDidMount() {
        const data =  localStorage.getItem('user');
        if(data) {
            const {username} = JSON.parse(data);
            this.setState({username})
        }
    }

    render(){
        const{username} = this.state;
    return(
        <main>
            <header className="home-header">
                <h1>Telzir</h1>
                <p><img className='image' src={profileImage}  alt="profile icon"/>{username}</p>
            </header>
        </main>
    )
    }
}
  
export default Home;
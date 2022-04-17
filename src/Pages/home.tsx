import React from 'react';
import '../styles/home.css';
import profileImage from "../img/user-regular.svg";
import RenderCalls from '../Components/renderCalls';
import CallsForm from '../Components/callsForm';
import { Call} from '../Interfaces/apiInterfaces';

type MyState = {
    username: string;
    id: number;
    isLogged: boolean;
    price: number;
    priceWithPlan: number;
    showPrice: boolean;
}

class Home extends React.Component <{}, MyState>{
    state = {
        username: '',
        id: 0,
        isLogged: false,
        price: 0,
        priceWithPlan: 0,
        showPrice: false
    }

    componentDidMount() {
        const data =  localStorage.getItem('user');
        if(data) {
            const {username, id} = JSON.parse(data);
            this.setState({username, id, isLogged:true})
        }
    }

    getPrice = (data: Call) => {
        const {price, priceWithPlan} = data;
        console.log(data);
        this.setState({price, priceWithPlan,showPrice: true})
    }

    render(){
        const{username,isLogged,price,priceWithPlan, showPrice} = this.state;
    if(isLogged)
    return(
        <main>
            <header className="home-header">
                <h1>Telzir</h1>
                <p><img className='image' src={profileImage}  alt="profile icon"/>{username}</p>
            </header>
            <CallsForm getPrice={this.getPrice}/>
            {/* <RenderCalls id={id} /> */}
            {showPrice? 
            <div className="price-container">
                <table>
                    <tr>
                        <th>Preço com o Plano</th>
                        <th>Preço Normal</th>
                    </tr>
                    <tr>
                        <td>R${price.toFixed(2)}</td>
                        <td>R${priceWithPlan.toFixed(2)}</td>
                    </tr>
                </table>
            </div>: null}
            


        </main>
    )
    }
}
  
export default Home;
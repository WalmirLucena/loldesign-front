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
    origin:number;
    destiny:number;
    time:number;
    showCalls: boolean;
}

class Home extends React.Component <{}, MyState>{
    state = {
        username: '',
        id: 0,
        isLogged: false,
        price: 0,
        priceWithPlan: 0,
        showPrice: false,
        origin: 0,
        destiny: 0,
        time: 0,
        showCalls: false
    }

    componentDidMount() {
        const data =  localStorage.getItem('user');
        if(data) {
            const {username, id} = JSON.parse(data);
            this.setState({username, id, isLogged:true})
        }
    }

    getPrice = (data: Call) => {
        const {price, priceWithPlan,origin, destiny,time} = data;
        this.setState({
            price, priceWithPlan,showPrice: true, origin, destiny, time})
    }

    handleClick = () => {
        const {showCalls} = this.state
        this.setState({showCalls: !showCalls})
    }

    render(){
        const{username,
            isLogged,
            price,priceWithPlan,
            showPrice,
            origin,
            destiny,
            time,
            id,
            showCalls} = this.state;
    if(isLogged)
    return(
        <main>
            <header className="home-header">
                <h1>Telzir</h1>
                <p><img className='image' src={profileImage}  alt="profile icon"/>{username}</p>
            </header>
            <button type="button" className="show-calls" onClick={this.handleClick}>Mostrar histórico de ligações</button>
            {showCalls?<RenderCalls id={id} />  :null}
            <hr className="line"/>
            <CallsForm getPrice={this.getPrice}/>
            <hr className="line"/>
            {showPrice? 
            <div className="price-container">
                <table>
                    <tr>
                        <th>DDD Origem</th>
                        <th>DDD Destino</th>
                        <th>Tempo em min</th>
                        <th>Preço com o Plano</th>
                        <th>Preço Normal</th>
                    </tr>
                    <tr>
                        <td>{origin}</td>
                        <td>{destiny}</td>
                        <td>{time}</td>
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
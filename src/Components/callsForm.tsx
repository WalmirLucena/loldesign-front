import React, {ChangeEvent} from "react";
import { Call } from "../Interfaces/apiInterfaces";
import { requestNewCall } from "../services/request";

type MyState = {
    origin: number;
    destiny:number;
    time: number | string;
    username:string;
    plan: number;
}

type Props = {
    getPrice: (data: Call) => void
}

class CallsForm extends React.Component <Props, MyState> {
    state = {
        origin: 0,
        destiny: 0,
        time: '',
        username: '',
        plan: 0,
    }

    componentDidMount() {
        const data =  localStorage.getItem('user');
        if(data) {
            const {username} = JSON.parse(data);
            this.setState({username})
        }
    }
    handleChange = (event: ChangeEvent<{ value: string, id: string}>): void => {
        this.setState({ ...this.state,
            [event.currentTarget.id]: event.currentTarget.value });
      }

      sendNewCall = async () => {
        
          const endpoint = "/calls";
          const {origin, destiny, time, username, plan} = this.state;

          if(origin!==0 && destiny!==0 && time && username && plan!==0){
              const call = await requestNewCall(endpoint,
                {origin: +origin, destiny: +destiny, time: +time, name: username, plan: +plan});
            return call;
          }  
        
    }

    handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const call = await this.sendNewCall();
        this.props.getPrice(call);
      
        }

    render (){
        const {origin, destiny,time, plan} = this.state;
        
        return (   
            <form className="calls-form" onSubmit={this.handleSubmit}>
                <div className="select-origin">
                    <label htmlFor="Origin">
                        <span>Origem da ligação</span>
                        <select id="origin" value={origin} onChange={this.handleChange}>
                            <option value="">Escolha o DDD de origem</option>
                            <option value="11" >011</option>
                            <option value="16" >016</option>
                            <option value="17" >017</option>
                            <option value="18" >018</option>
                        </select>
                    </label>
                </div>
                <div className="select-destiny">
                    <label htmlFor="destiny">
                        Destino da ligação
                        <select id="destiny" value={destiny} onChange={this.handleChange}>
                            <option value="">Escolha o DDD do destino</option>
                            <option value="11" >011</option>
                            <option value="16" >016</option>
                            <option value="17" >017</option>
                            <option value="18" >018</option>
                        </select>
                    </label>
                </div>
                <div className="input-time">
                <label htmlFor="time">
                        Tempo em minutos
                        <input type="text" 
                        name="time" 
                        id="time" 
                        className="input-time" 
                        value={time} 
                        placeholder="Tempo de ligação" 
                        onChange={this.handleChange} />
                    </label>
                </div>
                <div className="select-plan">
                    <label htmlFor="plan">
                        Selecione seu plano
                        <select id="plan" value={plan} onChange={this.handleChange}>
                            <option value="">Planos FaleMais</option>
                            <option value="30" >FaleMais 30</option>
                            <option value="60" >FaleMais 60</option>
                            <option value="120" >FaleMais 120</option>
                        </select>
                    </label>
                </div>
                <input type="submit"
                value="Calcular"
                className="call-input-button"/>
            </form>

        )
    }
}

export default CallsForm;
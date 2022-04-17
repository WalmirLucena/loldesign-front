import React, {ChangeEvent} from "react";

type MyState = {
    origin: number;
    destiny:number;
    time: number | string;
    username:string;
    plan: number;
}

class CallsForm extends React.Component <{}, MyState> {
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

    render (){
        const {origin, destiny,time, plan} = this.state;
        
        return (   
            <form className="calls-form">
                <div className="select-origin">
                    <label htmlFor="Origin">
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
                        <input type="text" 
                        name="time" 
                        id="time" 
                        className="input-time" 
                        value={time} 
                        placeholder="Tempo de ligação em minutos" 
                        onChange={this.handleChange} />
                    </label>
                </div>
                <div className="select-plan">
                    <label htmlFor="plan">
                        <select id="plan" value={plan} onChange={this.handleChange}>
                            <option value="">Escolha o seu Plano</option>
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
import React, {ChangeEvent} from "react";

type MyState = {
    origin: number;
    destiny:number;
    time: number | string;
    username:string

}

class CallsForm extends React.Component <{}, MyState> {
    state = {
        origin: 0,
        destiny: 0,
        time: '',
        username: ''
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
        const {origin, destiny,time} = this.state;
        console.log(time, 'callsform');
        return (   
            <form className="calls-form">
                <div className="select-origin">
                    <label htmlFor="Origin">
                        <select id="origin" value={origin} onChange={this.handleChange}>
                            <option value="">Select an origin</option>
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
                            <option value="">Select an destiny</option>
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
                        placeholder="Enter Call time in minutes" 
                        onChange={this.handleChange} />
                    </label>

                </div>
              
                
               
            </form>

        )
    }
}

export default CallsForm;
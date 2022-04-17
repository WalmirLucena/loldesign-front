import React from "react";
import { Call, IDelete } from "../Interfaces/apiInterfaces";
import { requestCallsList, requestDelete } from "../services/request";
import trashCan from '../img/trash-can-regular.svg';

type MyProps = {
    id: number;
}

type MyState = {
    calls: Call[],
}

class RenderCalls extends React.Component <MyProps,MyState>{
    state = {
        calls: []
    }
    
    getDataApi = async () => {
            const {id} = this.props;
            const endpoint = `/calls/${id}`;

            const callsList = await requestCallsList(endpoint);
            this.setState({...this.state, calls: callsList})
    }
    componentDidMount () {
        this.getDataApi();
    }

    deleteCallFromApi = async (data: IDelete) => {
        const { id, userId} = data;
        const endpoint = `/calls/${id}`;

        const remove = await requestDelete(endpoint , {id:userId})
        this.setState({calls: remove})
    }

    handleClick= async (call: Call) => {
        const { id,userId} = call
        await this.deleteCallFromApi({id,userId});
    } 
        
    render(){
        const {calls} = this.state;
        return(
            <div className="calls-container">
                <table className="calls-table">
                    <tr>
                        <th>DDD Origem</th>
                        <th>DDD Destino</th>
                        <th>Tempo em min</th>
                        <th>Preço com o Plano</th>
                        <th>Preço Normal</th>
                        <th>Remover</th>
                    </tr>
            {calls.map((call) => (
                    <tr key={call['id']}>
                        <td>{call['origin']}</td>
                        <td>{call['destiny']}</td>
                        <td>{call['time']}</td>
                        <td>R${JSON.parse(call['price']).toFixed(2)}</td>
                        <td>R${JSON.parse(call['priceWithPlan']).toFixed(2)}</td>
                        <td onClick={() => this.handleClick(call)}>
                            <div className="delete">
                                <img className="delete-icon" src={trashCan} alt="icon to remove call"/>
                            </div>
                        </td>
                    </tr>
                
            ))}
            </table>

            </div>
        )
    }
}

export default RenderCalls;
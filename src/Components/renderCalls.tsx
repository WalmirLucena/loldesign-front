import React from "react";

type MyProps = {
    id: number;
}

class RenderCalls extends React.Component <MyProps>{
    
    /* getDataApi = async () => {
        try {
            const endpoint = '/calls/name'
            
        } catch (err) {
            
        }
    } */
    render(){
        const {id} = this.props;
        return(
            <h1>{id}</h1>
        )
    }
}

export default RenderCalls;
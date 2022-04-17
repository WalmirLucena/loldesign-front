import axios from "axios";
import { IBody, ICall, IDelete } from "../Interfaces/apiInterfaces";

const api = axios.create({
    baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '4001'}`,
  });

export const requestNewCall = async (endpoint:string, body: ICall ) => {
    const {data} = await api.post(endpoint, body);
    return data;
}

export const requestCallsList = async (endpoint:string) => {
  const {data} = await api.get(endpoint);
  console.log(data, 'api');
  return data;
}

export const requestLogin = async (endpoint:string, body: IBody) => {
    const { data } = await api.post(endpoint, body);
    return data;
  };

export const requestDelete = async (endpoint:string, body: {id:number}) => {
  const {data} = await api.delete(endpoint, {data: body});
  return data;
}

export default api;
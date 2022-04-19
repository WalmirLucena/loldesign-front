import axios from "axios";
import { IBody, ICall, IUser } from "../Interfaces/apiInterfaces";

const api = axios.create({
    baseURL: `http://ec2-44-193-197-196.compute-1.amazonaws.com:4001/api/docs:${process.env.REACT_APP_API_PORT || '4001'}`,
  });

export const requestNewCall = async (endpoint:string, body: ICall ) => {
    const {data} = await api.post(endpoint, body);
    return data;
}

export const requestCallsList = async (endpoint:string) => {
  const {data} = await api.get(endpoint);
  return data;
}

export const requestLogin = async (endpoint:string, body: IBody) => {
    const { data } = await api.post(endpoint, body);
    return data;
  };

export const requestCreateUser = async (endpoint: string, body: IUser) => {
  const response = await api.post(endpoint, body);
  console.log(response);
  return response.data;
}

export const requestDelete = async (endpoint:string, body: {id:number}) => {
  const {data} = await api.delete(endpoint, {data: body});
  return data;
}

export default api;
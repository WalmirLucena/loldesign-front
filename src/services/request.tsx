import axios from "axios";
import { IBody } from "../Interfaces/apiInterfaces";

const api = axios.create({
    baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '4001'}`,
  });

export const requestData = async (endpoint:string) => {
    const {data} = await api.get(endpoint);
    return data;
}

export const requestLogin = async (endpoint:string, body: IBody) => {
    const { data } = await api.post(endpoint, body);
    return data;
  };

export default api;
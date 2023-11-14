import { LoginBody } from '../Store/types';
import axios, { AxiosError } from 'axios';

const instance = axios.create({
  // withCredentials: true,
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  // 'Access-Control-Allow-Methods': 'GET, OPTIONS, POST, PUT',
  //   'API-KEY': KEY,
  // },
});
export const getApiResource = async (url: string) => {
  try {
    const res = await instance(url);
    return await res.data;
  } catch (error) {
    if (error instanceof AxiosError) console.log(error.response?.data);
  }
};
export const loginUser = async (url: string, data: LoginBody) => {
  try {
    const login = await instance.post(url, { data });
    console.log(login.data);
    return await login.data;
  } catch (error) {
    if (error instanceof AxiosError) console.log(error.response?.data);
    return false;
  }
};

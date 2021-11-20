import axios from 'axios';
import { tx_key as key } from '../../config/private_key';

export interface TxResponseBody {
  code: number,
  msg: string,
  [params: string]: any
}

export const request = axios.create({
  baseURL: 'http://api.tianapi.com',
  timeout: 3000,
});

request.interceptors.request.use(
  (config) => {
    if (config.method === 'get') config.params.key = key;
    if (config.method === 'post') config.data.key = key;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

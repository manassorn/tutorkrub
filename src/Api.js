import axios from 'axios';
import Cookie from './Cookie'
import Auth from './Auth'

const Api = axios.create({
  baseURL: '/api',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});


export default Api;
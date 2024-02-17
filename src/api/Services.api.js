
import axios from 'axios';

export const getServices = () => {
    return axios.get('http://localhost:3000/service');
}
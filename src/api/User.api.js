import axios from 'axios';

export const getUser = () => {
    return axios.get('http://localhost:3000/user');
}
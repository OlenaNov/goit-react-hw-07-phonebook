import axios from "axios";

axios.defaults.baseURL = 'https://6435ab5d83a30bc9ad671d0f.mockapi.io';

export const fetchContacts = async () => {
    const response = await axios.get('/contacts');
    return response.data;
};


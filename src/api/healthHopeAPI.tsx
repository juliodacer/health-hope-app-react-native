import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

// const baseURL = "http://192.168.211.110:8080/api";
const baseURL = "https://webserver-node-backend.herokuapp.com/api";


const healthHopeAPI = axios.create({baseURL});

healthHopeAPI.interceptors.request.use(
    async( config: any )  => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers['x-token'] = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error)
      }
)

export default healthHopeAPI;
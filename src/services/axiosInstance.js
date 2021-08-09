import {API} from './api'
import axios from "axios";

const instance = axios.create({
  baseURL: API.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
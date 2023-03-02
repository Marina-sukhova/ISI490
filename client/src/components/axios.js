import axios from "axios";

export const keyurl = "api_key=8c35e168d6ce25efe9873ba3248fe753&language=en-US&page=1"
const Axios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'

});

export default Axios;



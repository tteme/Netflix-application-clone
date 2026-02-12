
import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "42e3dbc455bb950d3be61d70572ba307", 
  },
});
export default instance;
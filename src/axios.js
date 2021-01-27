import axios from "axios";

//base url for request to tmdb
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

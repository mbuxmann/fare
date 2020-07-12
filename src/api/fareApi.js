import axios from "axios";

export default axios.create({
  baseURL: "https://fare-server.herokuapp.com",
});

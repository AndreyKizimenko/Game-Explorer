import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: '3c9209d2e42744428743b1b3ee485501'
  }
});

export {CanceledError};
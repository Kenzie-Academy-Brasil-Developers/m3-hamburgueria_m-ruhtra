import axios from "axios";

const burgerApi = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/products",
  timeout: 5 * 1000,
});

export { burgerApi };

import axios from "axios";
const SecretKey = "T10XT53XjqYLLjBqx5Z8k6QBL2hYodteG33HHbk4MEM";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID noROjC1icXLQd9g711ElTrgQnCRg54guHyFFnDfypSo`,
  },
});

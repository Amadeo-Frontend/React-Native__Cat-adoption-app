import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  timeout: 1500,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchCatImage = async () => {
  try {
    const response = await instance.get("/images/search?limit=10");
    const imageUrl = response.data[0].url;
    return imageUrl;
  } catch (error) {
    console.error("Erro ao buscar imagem de gato:", error);
    throw error;
  }
};

export default instance;

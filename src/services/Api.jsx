import axios from "axios";

const key = import.meta.env.VITE_API_KEY;
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getCategories = () => axiosCreate.get(`/genres?key=${key}`);

const getByName = (search, page) =>
  axiosCreate.get(`/games?search=${search}&key=${key}&page=${page}`);

const getGamesByGenre = (idGenre, page) =>
  axiosCreate.get(`/games?genres=${idGenre}&key=${key}&page=${page}`);

const getWebSite = (idWebsite) =>
  axiosCreate.get(`/games/${idWebsite}?key=${key}`);

export default {
  getCategories,
  getByName,
  getGamesByGenre,
  getWebSite,
};

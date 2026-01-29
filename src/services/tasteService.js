import axios from "axios";

const RAPID_API_HOST = import.meta.env.VITE_RAPID_API_HOST;
const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;

const apiClient = axios.create({
  baseURL: `https://${RAPID_API_HOST}`,
  headers: {
    "x-rapidapi-key": RAPID_API_KEY,
    "x-rapidapi-host": RAPID_API_HOST,
  },
});

export const fetchRecipes = async (searchQuery = "", limit = 20, from = 0) => {
  try {
    const response = await apiClient.get("/recipes/list", {
      params: {
        from: from,
        size: limit,
        q: searchQuery,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Service Error:", error.response?.data || error.message);
    return [];
  }
};

export const fetchRecipeDetails = async (id) => {
  try {
    const response = await apiClient.get("/recipes/get-more-info", {
      params: { id: id },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
};

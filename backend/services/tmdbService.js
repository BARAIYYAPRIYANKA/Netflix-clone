import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
    const apiKey = ENV_VARS.TMDB_API_KEY;
    console.log(`Using API Key: ${apiKey}`); // Log the API key for debugging

    const fullUrl = `${url}&api_key=${apiKey}`; // Append API key to the URL

    const options = {
        params: { language: 'en-US', page: '1' },
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer '+ process.env.TMDB_API_KEY
        }
      };

    try {
        console.log(`Fetching data from TMDB: ${fullUrl}`); // Log the URL for debugging
        const response = await axios.get(fullUrl, options);

        if (response.status !== 200) {
            throw new Error(`Failed to fetch data from TMDB. Status: ${response.status}, StatusText: ${response.statusText}`);
        }

        return response.data;
    } catch (error) {
        console.error("Error in fetchFromTMDB:", error.response ? error.response.data : error.message);
        throw new Error(`Failed to fetch data from TMDB: ${error.response ? error.response.data.status_message : error.message}`);
    }
};

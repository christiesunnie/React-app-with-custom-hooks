import axios from "axios";

const API_KEY = "AIzaSyCJ9hd8ur5d3bKWrGGVRA_tnHMJJ3Vyqlw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: API_KEY,
  },
});

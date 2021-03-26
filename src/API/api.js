import * as axios from "axios";

const instance = axios.create({
  // withCredentials: true,
  baseURL: "https://api.football-data.org/v2/",
  headers: {
    "Content-Type": `application/json`,
    "X-Auth-Token": "56c528b27099407ba648fc6d89af86c4",
  },
});

export const soccerAPI = {
  getLeagues(searchResult = '') {
    return instance.get(`competitions/${searchResult}`).then((response) => {
      return response.data;
    });
  },
};

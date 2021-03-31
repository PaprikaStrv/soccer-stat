import * as axios from "axios";

const instance = axios.create({
  // withCredentials: true,
  baseURL: "https://api.football-data.org/v2/",
  headers: {
    // "Content-Type": `application/json`,
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    // "Access-Control-Allow-Headers": "x-requested-with, Content-Type, origin, authorization, accept, x-access-token",
    "X-Auth-Token": "56c528b27099407ba648fc6d89af86c4",
  },
});

export const soccerAPI = {
  getLeagues(currentLeague = "") {
    return instance.get(`competitions/${currentLeague}`).then((response) => {
      return response.data;
    });
  },
  getLeagueMatches(currentLeague = "") {
    return instance
      .get(`competitions/${currentLeague}/matches`)
      .then((response) => {
        return response.data;
      });
  },

  getTeams(currentLeague = "", currentSeason = "2020") {
    return instance
      .get(`competitions/${currentLeague}/teams?season=${currentSeason}`)
      .then((response) => {
        return response.data;
      });
  },

  getLeagueTable(currentLeague = "", currentSeason = "2020") {
    return instance
      .get(`competitions/${currentLeague}/standings?season=${currentSeason}`)
      .then((response) => {
        return response.data;
      });
  },
};

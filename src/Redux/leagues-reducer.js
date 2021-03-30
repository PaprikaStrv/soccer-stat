import { soccerAPI } from "./../API/api";

const SET_LEAGUES_LIST = "SET_LEAGUES_LIST";
const SET_SEARCH_RESULT = "SET_SEARCH_RESULT";
const SET_LEAGUE_MATHES = "SET_LEAGUE_MATCHES";
const SET_TEAMS_LIST = "SET_TEAMS_LIST";

let initialState = {
  leaguesList: [],
  leagueMatches: [],
  teamsList: [],
  searchResult: "",
};
const leaguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEAGUES_LIST:
      return {
        ...state,
        ...action,
        leaguesList: action.data,
      };
    case SET_SEARCH_RESULT:
      return {
        ...state,
        ...action,
        searchResult: action.search,
      };

    case SET_LEAGUE_MATHES:
      return {
        ...state,
        ...action,
        leagueMatches: action.leagueMatches,
      };
      case SET_TEAMS_LIST:
        return {
          ...state,
          ...action,
          teamsList: action.data,
        }
    default:
      return state;
  }
};

export const setLeaguesList = (leagues) => ({
  type: SET_LEAGUES_LIST,
  data: leagues,
});

export const setLeagueMatches = (matches) => ({
  type: SET_LEAGUE_MATHES,
  leagueMatches: matches,
});

export const setSearchResult = (searchValue) => ({
  type: SET_SEARCH_RESULT,
  search: searchValue,
});

export const setTeamsList = (teams) => ({
  type: SET_TEAMS_LIST,
  data: teams,
});

// export const getLeaguesThunkCreator = (currentLeague) => {
//   return (dispatch) => {
//     soccerAPI.getLeagues(currentLeague).then((data) => {
//       dispatch(setLeaguesList(data));
//     });
//   };
// };

export const getLeaguesThunkCreator = (currentLeague) => {
  return async (dispatch) => {
    const response = await soccerAPI.getLeagues(currentLeague);
    dispatch(setLeaguesList(response));
  };
};


export const getLeagueMatchesThunkCreator = (currentLeague) => {
  return (dispatch) => {
    soccerAPI.getLeagueMatches(currentLeague).then((data) => {
      dispatch(setLeagueMatches(data));
    });
  };
};

export const getTeamsThunkCreator = () => {
  return async (dispatch) => {
    const response = await soccerAPI.getTeams();
    dispatch(setTeamsList(response));
  };
};

export default leaguesReducer;

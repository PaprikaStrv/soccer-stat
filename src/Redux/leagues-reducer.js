import { soccerAPI } from "./../API/api";

const SET_LEAGUES_LIST = "SET_LEAGUES_LIST";
const SET_SEARCH_RESULT = "SET_SEARCH_RESULT";
const SET_LEAGUE_MATHES = "SET_LEAGUE_MATCHES";

let initialState = {
  leaguesList: [],
  leagueMatches: [],
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

export const getLeaguesThunkCreator = (currentLeague) => {
  return (dispatch) => {
    soccerAPI.getLeagues(currentLeague).then((data) => {
      dispatch(setLeaguesList(data));
    });
  };
};

export const getLeagueMatchesThunkCreator = (currentLeague) => {
  return (dispatch) => {
    soccerAPI.getLeagueMatches(currentLeague).then((data) => {
      dispatch(setLeagueMatches(data));
    });
  };
};

export default leaguesReducer;

import { soccerAPI } from "./../API/api";

const SET_LEAGUES_LIST = "SET_LEAGUES_LIST";
const SET_LEAGUE_CURRENT_PAGE = "SET_LEAGUE_CURRENT_PAGE";

let initialState = {
  leaguesList: [],
  leagueCurrentPage: null,
};

const leaguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEAGUES_LIST:
      return {
        ...state,
        ...action,
        leaguesList: action.data,
      };
    case SET_LEAGUE_CURRENT_PAGE:
      return {
        ...state,
        ...action,
        leagueCurrentPage: action.currentPage,
      };
    default:
      return state;
  }
};

export const setLeaguesList = (leagues) => ({
  type: SET_LEAGUES_LIST,
  data: leagues,
});

export const setLeaguesCurrentPage = (leagueCurrentPage) => ({
  type: SET_LEAGUE_CURRENT_PAGE,
  currentPage: leagueCurrentPage,
});

export const getLeaguesThunkCreator = (searchResult) => {
  return (dispatch) => {
    soccerAPI.getLeagues(searchResult).then((data) => {
      const leaguesList = data;
      dispatch(setLeaguesList(leaguesList));
    });
  };
};

export default leaguesReducer;

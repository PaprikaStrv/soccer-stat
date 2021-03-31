import { soccerAPI } from "./../API/api";

const SET_LEAGUE_MATHES = "SET_LEAGUE_MATCHES";

let initialState = {
  leagueMatches: [],
};
const matchesReducer = (state = initialState, action) => {
  switch (action.type) {
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

export const setLeagueMatches = (matches) => ({
  type: SET_LEAGUE_MATHES,
  leagueMatches: matches,
});

export const getLeagueMatchesThunkCreator = (currentLeague) => {
  return async (dispatch) => {
    const response = await soccerAPI.getLeagueMatches(currentLeague);
    dispatch(setLeagueMatches(response));
  };
};

export default matchesReducer;

import { soccerAPI } from "./../API/api";

const SET_CURRENT_TEAM = "SET_CURRENT_TEAM";
const SET_CURRENT_MATCHES = "SET_CURRENT_MATCHES";

let initialState = {
  team: [],
  matches: [],
};
const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_TEAM:
      return {
        ...state,
        ...action,
        team: action.currentTeam,
      };
    case SET_CURRENT_MATCHES:
      return {
        ...state,
        ...action,
        matches: action.currentMatches,
      };
    default:
      return state;
  }
};

export const setCurrentTeam = (team) => ({
  type: SET_CURRENT_TEAM,
  currentTeam: team,
});

export const setCurrentMatches = (matches) => ({
  type: SET_CURRENT_MATCHES,
  currentMatches: matches,
});

export const getCurrentTeamThunkCreator = (currentTeam) => {
  return async (dispatch) => {
    const response = await soccerAPI.getTeam(currentTeam);
    dispatch(setCurrentTeam(response));
  };
};

export const getTeamMatchesCurrentLeagueThunkCreator = (
  currentTeam,
  competition
) => {
  return async (dispatch) => {
    const response = await soccerAPI.getTeamCurrentLeagueMatches(
      currentTeam,
      competition
    );
    dispatch(setCurrentMatches(response));
  };
};

export default teamReducer;

import { soccerAPI } from "./../API/api";

const SET_TEAMS_LIST = "SET_TEAMS_LIST";

let initialState = {
  teamsList: [],
};
const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAMS_LIST:
      return {
        ...state,
        ...action,
        teamsList: action.data,
      };
    default:
      return state;
  }
};

export const setTeamsList = (teams) => ({
  type: SET_TEAMS_LIST,
  data: teams,
});

export const getTeamsThunkCreator = (currentLeague, currentSeason) => {
  return async (dispatch) => {
    const response = await soccerAPI.getTeams(currentLeague, currentSeason);
    dispatch(setTeamsList(response));
  };
};

export default teamsReducer;

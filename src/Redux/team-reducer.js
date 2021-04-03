import { soccerAPI } from "./../API/api";

const SET_CURRENT_TEAM = "SET_CURRENT_TEAM";

let initialState = {
  team: [],
};
const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_TEAM:
      return {
        ...state,
        ...action,
        team: action.currentTeam,
      };
    default:
      return state;
  }
};

export const setCurrentTeam = (team) => ({
  type: SET_CURRENT_TEAM,
  currentTeam: team,
});

export const getCurrentTeamThunkCreator = (currentTeam) => {
  return async (dispatch) => {
    const response = await soccerAPI.getTeam(currentTeam);
    dispatch(setCurrentTeam(response));
  };
};

export default teamReducer;

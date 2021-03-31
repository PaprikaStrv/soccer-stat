import { soccerAPI } from "./../API/api";

const SET_LEAGUES_LIST = "SET_LEAGUES_LIST";

let initialState = {
  leaguesList: [],
};
const leaguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEAGUES_LIST:
      return {
        ...state,
        ...action,
        leaguesList: action.data,
      };

    default:
      return state;
  }
};

export const setLeaguesList = (leagues) => ({
  type: SET_LEAGUES_LIST,
  data: leagues,
});

export const getLeaguesThunkCreator = (currentLeague) => {
  return async (dispatch) => {
    const response = await soccerAPI.getLeagues(currentLeague);
    dispatch(setLeaguesList(response));
  };
};

export default leaguesReducer;

import { soccerAPI } from "./../API/api";

const SET_LEAGUE_TABLE = "SET_LEAGUE_TABLE";

let initialState = {
  table: [],
};

const leagueTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEAGUE_TABLE:
      return {
        ...state,
        ...action,
        table: action.data,
      };
    default:
      return state;
  }
};

export const setLeagueTable = (table) => ({
  type: SET_LEAGUE_TABLE,
  data: table,
});

export const getLeagueTableThunkCreator = (currentLeague, currentSeason) => {
  return async (dispatch) => {
    const response = await soccerAPI.getLeagueTable(
      currentLeague,
      currentSeason
    );
    dispatch(setLeagueTable(response));
  };
};

export default leagueTableReducer;

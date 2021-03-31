import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import leaguesReducer from './leagues-reducer';
import leagueTableReducer from './leagueTable-reducer';
import matchesReducer from './matches-reducer';
import searchReducer from './search-reducer';
import teamsReducer from './teams-reducer';


let reducers = combineReducers({
   leagues: leaguesReducer,
   matches: matchesReducer,
   teams: teamsReducer,
   leagueTable: leagueTableReducer,
   search: searchReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
import React, { useEffect } from "react";
import LeaguesList from "./LeaguesList";
import { getLeaguesThunkCreator } from "./../../Redux/leagues-reducer";
import { connect } from "react-redux";

const LeaguesListContainer = (props) => {
  useEffect(() => {
    props.getLeaguesThunkCreator();
  }, [props.searchResult]); //зависимость?!

  if (props.leaguesList === null || props.leaguesList.length === 0) {
    return <div>Loading data</div>;
  }
 
  return <LeaguesList {...props} />;
};

const mapStateToProps = (state) => ({
  leaguesList: state.leagues.leaguesList,
  searchResult: state.search.searchResult,
});

export default connect(mapStateToProps, {
  getLeaguesThunkCreator,
})(LeaguesListContainer);

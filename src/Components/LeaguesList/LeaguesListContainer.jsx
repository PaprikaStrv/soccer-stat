import React, { useEffect } from "react";
import LeaguesList from "./LeaguesList";
import {
  getLeaguesThunkCreator,
} from "./../../Redux/leagues-reducer";
import { connect } from "react-redux";


const LeaguesListContainer = (props) => {
  useEffect(() => {
    props.getLeaguesThunkCreator();
  }, []); //зависимость?!

  if (!props.leaguesList || props.leaguesList.length === 0) {
    return <div>Loading data</div>;
  }
  return <LeaguesList {...props} />;
};

const mapStateToProps = (state) => ({
  leaguesList: state.leagues.leaguesList,
});

export default connect(mapStateToProps, {
  getLeaguesThunkCreator,
})(LeaguesListContainer);

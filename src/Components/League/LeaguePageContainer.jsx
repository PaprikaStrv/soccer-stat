import React from "react";
import LeaguePage from "./LeaguePage";
import { connect } from "react-redux";
import { useEffect } from "react";
import {
  getLeaguesThunkCreator,
} from "./../../Redux/leagues-reducer";
import { withRouter } from "react-router";
import Preloader from "../Preloader/Preloader";

const LeaguePageContainer = (props) => {
  useEffect(() => {
    props.getLeaguesThunkCreator(props.match.params.leagueId);
  }, [props.searchResult]); //зависимость?!

  if (!props.leaguesList || props.leaguesList.length === 0) {
    return <Preloader/>;
  }

  return <LeaguePage {...props} />;
};

const mapStateToProps = (state) => ({
  leaguesList: state.leagues.leaguesList,
  searchResult: state.search.searchResult,
});

let WithUrlDataLeaguePageContainer = withRouter(LeaguePageContainer);

export default connect(mapStateToProps, {
  getLeaguesThunkCreator,
})(WithUrlDataLeaguePageContainer);

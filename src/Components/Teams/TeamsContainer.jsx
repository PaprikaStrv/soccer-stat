import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTeamsThunkCreator } from "../../Redux/leagues-reducer";
import { withRouter } from 'react-router';
import Teams from "./Teams";


const TeamsContainer = (props) => {
  useEffect(() => {
    props.getTeamsThunkCreator();
  }, [props.searchResult]); //зависимость?!

  if (!props.teamsList || props.teamsList.length === 0) {
    return <div>Loading data</div>;
  }

  return <Teams {...props} />;
};

const mapStateToProps = (state) => ({
  teamsList: state.leagues.teamsList,
  searchResult: state.leagues.searchResult,
});

let WithUrlDataTeamsContainer = withRouter(TeamsContainer);

export default connect(mapStateToProps, { getTeamsThunkCreator })(
  WithUrlDataTeamsContainer
);

import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./Components/Header/Header";
import LeaguesListContainer from "./Components/LeaguesList/LeaguesListContainer";
import LeaguePageContainer from "./Components/League/LeaguePageContainer";
import TeamsContainer from "./Components/Teams/TeamsContainer";
import MatchesContainer from "./Components/Matches/MatchesContainer";
import TeamInfoContainer from "./Components/TeamInfo/TeamInfoContainer";

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <LeaguesListContainer />} />
        <Route
          path="/League/:leagueId"
          render={() => <LeaguePageContainer />}
        />
        <Route
          path="/team/:teamId"
          render={() => <TeamInfoContainer/>}
        />
      </Switch>
    </div>
  );
};

export default App;

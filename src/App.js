import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./Components/Header/Header";
import LeaguesListContainer from "./Components/LeaguesList/LeaguesListContainer";
import LeaguePageContainer from "./Components/League/LeaguePageContainer";
import TeamsContainer from "./Components/Teams/TeamsContainer";

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
          path="/teams/"
          render={() => <TeamsContainer />}
        />
      </Switch>
    </div>
  );
};

export default App;

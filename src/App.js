import { Route, Switch } from 'react-router';
import './App.css';
import Header from './Components/Header/Header';

import LeaguesListContainer from './Components/LeaguesList/LeaguesListContainer';

const App = (props) => {
  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" render={() => <LeaguesListContainer/>} />
      </Switch>
    </div>
  );
}

export default App;

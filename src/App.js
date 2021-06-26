import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';

function App() {
  return (
      <div>
          <Switch>
              <Route path="/" exact={true}>
                  <AllMeetupsPage />
              </Route>
              <Route path="/new-meetup">
                  <NewMeetupsPage />
              </Route>
              <Route path="/favorites">
                  <FavoritesPage />
              </Route>
          </Switch>
      </div>
  );
}

export default App;
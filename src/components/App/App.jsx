import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import { pages } from "../../utils/constants";
import "./App.css";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={pages.Main} exact>
          <Main />
        </Route>
        <Route path={pages.Movies} exact>
          <Movies />
        </Route>
        <Route path={pages.SavedMovies} exact>
          <SavedMovies />
        </Route>
        <Route path={pages.Profile} exact>
          <Profile />
        </Route>
        <Route path={pages.Signup} exact>
          <Register />
        </Route>
        <Route path={pages.Signin} exact>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

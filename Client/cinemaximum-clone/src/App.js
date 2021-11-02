import Cinemas from "./components/Pages/Cinemas";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sinemalar">
            <Cinemas />
          </Route>
          <Route path="/uye-ol">
            <Register />
          </Route>
          <Route path="/giris">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

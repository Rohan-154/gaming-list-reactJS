import "./styles.css";
import { Route, Switch } from "react-router-dom";
import "./style.css";
import Nav from "./Nav";
import Battle from "./Battle";
import AGames from "./AGames";
import Sports from "./Sports";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="head">
          <h1> Field Of Gamers</h1>
        </div>

        <h2>Explore the best games of respective category.</h2>

        <Nav />
        <Switch>
          <Route path="/Battle" exact={true}>
            {" "}
            <Battle />{" "}
          </Route>
          <Route path="/Sports">
            {" "}
            <Sports />{" "}
          </Route>
          <Route path="/AGames">
            {" "}
            <AGames />{" "}
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </header>
    </div>
  );
}
function PageNotFound() {
  return (
    <div>
      <h1>
        <i>
          Breathe In,Breathe Out <br /> Click On the Category to Start
        </i>
      </h1>
    </div>
  );
}

export default App;

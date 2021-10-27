import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import Table from "./Table"

function App() {
  return (
      <Router> 
        <Switch> 
          <Route exact path="/" component={Table} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
  );
}

export default App;

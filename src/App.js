import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./components"
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );


}

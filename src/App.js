import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { Navbar } from "./components"
import Home from "./pages/HomePage/Home";

export default function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </Router>
  );


}

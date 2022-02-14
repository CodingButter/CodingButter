import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { Footer, Navbar } from "./components";
import { Home, Consultation } from "./pages";
import { UseTwitchContext } from "./hook/UseTwitchContext";

export default function App() {
  return (
    <UseTwitchContext>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/consultation" exact component={Consultation} />
        </Switch>
        <Footer />
      </Router>
    </UseTwitchContext>
  );
}

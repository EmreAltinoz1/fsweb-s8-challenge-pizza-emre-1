import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AnaSayfa from "./pages/AnaSayfa";
import SiparisSayfasi from "./pages/SiparisSayfasi";
import OnaySayfasi from "./pages/OnaySayfasi";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [userChoices, setUserChoices] = useState({});

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <AnaSayfa />
        </Route>
        <Route path="/siparis">
          <SiparisSayfasi userChoices={userChoices} setUserChoices={setUserChoices} />
        </Route>
        <Route path="/onay">
          <OnaySayfasi userChoices={userChoices} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


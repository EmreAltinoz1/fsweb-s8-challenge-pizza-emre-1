import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AnaSayfa from "./pages/AnaSayfa";
import SiparisSayfasi from "./pages/SiparisFormu";
import OnaySayfasi from "./pages/OnaySayfasi";
import { useState } from "react";
import "./css/SiparisSayfasi.css";

function App() {
  const [userChoices, setUserChoices] = useState({});

  return (
    <Router>
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


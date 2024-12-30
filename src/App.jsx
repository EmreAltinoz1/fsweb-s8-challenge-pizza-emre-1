import { BrowserRouter,  Route } from "react-router-dom";
import  AnaSayfa  from "../src/pages/AnaSayfa";
import SiparisSayfasi from "./pages/SiparisSayfasi";
import OnaySayfasi from "./pages/OnaySayfasi";
import Navbar from "./components/Navbar";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
// import AnaSayfa from '../src/css/AnaSayfa.css'

function App() {
  const [userChoices, setUserChoices] = useState({});
  return (
    <>
      <Switch>
        <Route exact path="/">
          <AnaSayfa />
        </Route>
      </Switch>
       <Switch>
        <Route path="/onay-sayfasi">
          <OnaySayfasi  />
        </Route>
      </Switch>
      <Switch>
        <Route path="/siparis-ozeti">
          <SiparisSayfasi />
        </Route>
      </Switch>
    </>
  );
}

export default App;

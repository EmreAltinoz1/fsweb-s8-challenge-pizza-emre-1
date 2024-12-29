import { BrowserRouter,  Route } from "react-router-dom";
import  AnaSayfa  from "../src/pages/AnaSayfa";
import SiparisSayfasi from "./pages/SiparisSayfasi";
import OnaySayfasi from "./pages/OnaySayfasi";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/siparis" element={<SiparisSayfasi />} />
        <Route path="/onay" element={<OnaySayfasi />} />
      
    </BrowserRouter>
  );
}

export default App;

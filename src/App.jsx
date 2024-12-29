import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anasayfa from "./pages/AnaSayfa";
import SiparisSayfasi from "./pages/SiparisSayfasi";
import OnaySayfasi from "./pages/OnaySayfasi";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/siparis" element={<SiparisSayfasi />} />
        <Route path="/onay" element={<OnaySayfasi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

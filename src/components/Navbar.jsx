import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import React from 'react';
import '../css/Navbar.css'; // CSS dosyasını buraya import ediyoruz.

function Navbar() {

  const location = useLocation();

  // AnaSayfa'da navbar gizlenir
  if (location.pathname === '/') {
    return null;
  }
    return (
        <nav>
          <ul>
            <li><Link to="/">Anasayfa</Link></li>
            <li><Link to="/siparis">Sipariş Sayfası</Link></li>
            <li><Link to="/onay">OnaySayfasi</Link></li>
          </ul>
        </nav>
    );
}

export default Navbar;
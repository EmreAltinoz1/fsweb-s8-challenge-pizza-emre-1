import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import React from 'react';
import '../css/Navbar.css'; 


function Navbar() {

  const location = useLocation();

  
  if (location.pathname === '/') {
    return null;
  }
    return (
        <nav>
          <ul>
            <li><Link to="/">Anasayfa</Link></li>
            <li><Link to="/siparis">Seçenekler</Link></li>
            <li><Link to="/onay">Sipariş Oluştur</Link></li>
          </ul>
        </nav>
    );
}

export default Navbar;
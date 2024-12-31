

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/AnaSayfa.css';  
import Navbar from '../components/Navbar';

function AnaSayfa() {
  return (
    <div className="anasayfa-container">
      <h1>Teknolojik Yemekler</h1>
      <p>KOD ACIKTIRIR <br /> PİZZA, DOYURUR</p>
      <NavLink to="/siparis">
        <button className="aciktim-button">Acıktım</button>
      </NavLink>
    </div>
  );
}

export default AnaSayfa;

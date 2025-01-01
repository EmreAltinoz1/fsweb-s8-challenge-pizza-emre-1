import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/AnaSayfa.css';
import Navbar from '../components/Navbar';

function AnaSayfa() {
  return (
    <div className="anasayfa-container">
      <h1 className="anasayfa-baslik">Teknolojik Yemekler</h1>
      <p className="anasayfa-slogan">KOD ACIKTIRIR<br />PİZZA, DOYURUR</p>
      <NavLink to="/siparis">
        <button className="anasayfa-button">Acıktım</button>
      </NavLink>
    </div>
  );
}

export default AnaSayfa;
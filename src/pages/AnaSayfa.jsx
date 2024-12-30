import React from 'react'
import "../css/Ana.css"
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
function AnaSayfa() {
  return (
    <NavLink to ="/onay-sayfasi">
    <button>acıktım</button>
    </NavLink>
  )
}

export default AnaSayfa
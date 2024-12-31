import React, { useState } from "react";
import "../css/SiparisSayfasi.css";

function SiparisSayfasi({ userChoices, setUserChoices }) {
  const [size, setSize] = useState("");
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState("");

  const handleToppingChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setToppings([...toppings, value]);
    } else {
      setToppings(toppings.filter((topping) => topping !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserChoices({ size, toppings, note });
  };

  return (
    <div className="siparis-container">
      <h1>Sipariş Ver</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Boyut Seç:</label>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Seçiniz</option>
            <option value="Küçük">Küçük</option>
            <option value="Orta">Orta</option>
            <option value="Büyük">Büyük</option>
          </select>
        </div>
        <div>
          <label>Malzemeler:</label>
          <div>
            <input type="checkbox" value="Peynir" onChange={handleToppingChange} /> Peynir
            <input type="checkbox" value="Mantar" onChange={handleToppingChange} /> Mantar
            <input type="checkbox" value="Zeytin" onChange={handleToppingChange} /> Zeytin
          </div>
        </div>
        <div>
          <label>Not:</label>
          <textarea value={note} onChange={(e) => setNote(e.target.value)}></textarea>
        </div>
        <button type="submit">Sipariş Ver</button>
      </form>
    </div>
  );
}

export default SiparisSayfasi;

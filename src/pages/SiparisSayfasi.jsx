import React, { useState } from "react";
import "../css/SiparisSayfasi.css";

function SiparisSayfasi({ userChoices, setUserChoices }) {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  const toppingOptions = [
    "Pepperoni", "Domates", "Biber", "Sosis", "Mısır", "Sucuk",
    "Kanada Jambonu", "Ananas", "Tavuk Izgara", "Jalapeno",
    "Kabak", "Soğan", "Sarımsak"
  ];

  const handleToppingChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      if (toppings.length < 10) {
        setToppings([...toppings, value]);
      } else {
        setError("En fazla 10 malzeme seçebilirsiniz.");
      }
    } else {
      setToppings(toppings.filter((topping) => topping !== value));
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!size) {
      setError("Lütfen bir boyut seçin.");
      return;
    }
    if (!dough) {
      setError("Lütfen bir hamur seçin.");
      return;
    }
    if (toppings.length < 4) {
      setError("En az 4 malzeme seçmelisiniz.");
      return;
    }
    setUserChoices({ size, dough, toppings, note, quantity });
    setError("");
  };

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => (increment ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  const calculateTotal = () => {
    const basePrice = 85.5;
    const toppingPrice = toppings.length * 5;
    return (basePrice + toppingPrice) * quantity;
  };

  return (
    <div className="siparis-container">
      <h1>Position Absolute Acı Pizza</h1>
      <p className="price">85.50₺</p>
      <p className="description">
        Frontend Dev adayı hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Boyut Seç:</label>
          <div className="radio-group">
            <label><input type="radio" name="size" value="Küçük" onChange={(e) => setSize(e.target.value)} /> Küçük</label>
            <label><input type="radio" name="size" value="Orta" onChange={(e) => setSize(e.target.value)} /> Orta</label>
            <label><input type="radio" name="size" value="Büyük" onChange={(e) => setSize(e.target.value)} /> Büyük</label>
          </div>
        </div>

        <div className="form-group">
          <label>Hamur Seç:</label>
          <select value={dough} onChange={(e) => setDough(e.target.value)} required>
            <option value="">Hamur Kalınlığı</option>
            <option value="İnce">İnce</option>
            <option value="Normal">Normal</option>
            <option value="Kalın">Kalın</option>
          </select>
        </div>

        <div className="form-group">
          <label>Ek Malzemeler (En Fazla 10):</label>
          <div className="checkbox-group">
            {toppingOptions.map((topping, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={topping}
                  onChange={handleToppingChange}
                /> {topping}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Sipariş Notu:</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Siparişe eklemek istediğiniz bir not var mı?"
          ></textarea>
        </div>

        <div className="form-group quantity-group">
          <label>Adet:</label>
          <button type="button" onClick={() => handleQuantityChange(false)}>-</button>
          <span>{quantity}</span>
          <button type="button" onClick={() => handleQuantityChange(true)}>+</button>
        </div>

        <div className="order-summary">
          <p>Seçimler: {toppings.length} adet</p>
          <p>Sipariş Toplamı: {calculateTotal().toFixed(2)}₺</p>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="siparis-ver">Sipariş Ver</button>
      </form>
    </div>
  );
}

export default SiparisSayfasi;

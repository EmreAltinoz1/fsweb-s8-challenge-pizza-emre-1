import React, { useState } from "react";
import "../css/SiparisSayfasi.css";
import Navbar from '../components/Navbar';


function SiparisSayfasi() {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  const toppingOptions = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Mısır",
    "Sucuk",
    "Kanada Jambonu",
    "Ananas",
    "Tavuk Izgara",
    "Jalapeno",
    "Kabak",
    "Soğan",
    "Sarımsak",
  ];

  const sizeOptions = ["Küçük", "Orta", "Büyük"];
  const doughOptions = ["İnce", "Kalın", "Normal"];

  const handleToppingChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      if (toppings.length < 10) {
        setToppings([...toppings, value]);
        setError("");
      } else {
        setError("En fazla 10 malzeme seçebilirsiniz.");
      }
    } else {
      setToppings(toppings.filter((topping) => topping !== value));
    }
  };

  const calculateTotal = () => {
    const basePrice = 85.5;
    const sizePrice = size === "Orta" ? 5 : size === "Büyük" ? 10 : 0;
    const toppingPrice = toppings.length * 5;
    return (basePrice + sizePrice + toppingPrice) * quantity;
  };

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => (increment ? prev + 1 : prev > 1 ? prev - 1 : 1));
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
    alert("Sipariş başarıyla oluşturuldu!");
    setError("");
  };

  return (
    <div className="order-page">
      <header className="order-header">
        <h1>Teknolojik Yemekler</h1>
        <Navbar />
      </header>

      <main className="order-main">
        <section className="order-info">
          <h2>Position Absolute Acı Pizza</h2>
          <div className="price-rating">
            <p className="price">85.50₺</p>
            <p className="rating">
              <span>4.9</span> (200)
            </p>
          </div>
          <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen
              pizzetta denir.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="order-form">
          <section className="size-crust-selection">
                    <div className="size-selection">
            <h3>Boyut Seç</h3>
            {sizeOptions.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="size"
                    value={option}
                    checked={size === option}
                    onChange={(e) => setSize(e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>


            <div className="crust-selection">
              <h3>Hamur Seç</h3>
              <select
                name="dough"
                value={dough}
                onChange={(e) => setDough(e.target.value)}
              >
                <option value="" disabled>
                  Hamur Kalınlığı
                </option>
                {doughOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </section>

          <section className="toppings-selection">
            <h3>Ek Malzemeler</h3>
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="toppings-grid">
              {toppingOptions.map((option) => (
                <label key={option}>
                  <input
                    type="checkbox"
                    value={option}
                    checked={toppings.includes(option)}
                    onChange={handleToppingChange}
                  />
                  {option}
                </label>
              ))}
            </div>
          </section>

          <section className="order-note">
            <label htmlFor="note">Sipariş Notu</label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
            />
          </section>

          <section className="quantity-price">
               <div className="quantity-main">
               <div className="quantity-control">
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(false)}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button type="button" onClick={() => handleQuantityChange(true)}>
                    +
                  </button>
                </div>
               </div>
  <div className="main-summary">
    <div className="price-summary">
      <p>Seçimler: {toppings.length * 5}₺</p>
      <p style={{ color: "red", fontWeight: "bold" }}>Toplam: {calculateTotal()}₺</p>
    </div>
    <button type="submit" className="order-submit">
      Sipariş Ver
    </button>
  </div>
</section>


         
          {error && <p className="error">{error}</p>}
        </form>
      </main>
    </div>
  );
}

export default SiparisSayfasi;

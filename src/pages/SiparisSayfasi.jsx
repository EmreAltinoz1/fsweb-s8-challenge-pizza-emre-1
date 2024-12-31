import React, { useState } from 'react';
import '../css/SiparisSayfasi.css'; 

function SiparisSayfasi() {
  const [secimler, setSecimler] = useState([]);
  const [toplam, setToplam] = useState(85.50); 

  const handleMalzemeSecimi = (event) => {
    const malzeme = event.target.name;
    const fiyat = 5; 
    if (event.target.checked) {
      setSecimler([...secimler, malzeme]);
      setToplam(toplam + fiyat);
    } else {
      setSecimler(secimler.filter((item) => item !== malzeme));
      setToplam(toplam - fiyat);
    }
  };

  return (
    <div className="siparis-container">
      <header className="header">
        <h1>Teknolojik Yemekler</h1>
        <nav>
          <span>Anasayfa &gt; Seçenekler &gt; Sipariş Sayfası</span>
        </nav>
      </header>
      <main>
        <section className="pizza-detay">
          <h2>Position Absolute Acı Pizza</h2>
          <p>85.50₺</p>
          <p>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
          </p>
        </section>

        <section className="secimler">
          <h3>Boyut Seç *</h3>
          <label>
            <input type="radio" name="boyut" /> Küçük
          </label>
          <label>
            <input type="radio" name="boyut" /> Orta
          </label>
          <label>
            <input type="radio" name="boyut" /> Büyük
          </label>
        </section>

        <section className="secimler">
          <h3>Hamur Seç *</h3>
          <select>
            <option value="ince">İnce Hamur</option>
            <option value="kalin">Kalın Hamur</option>
          </select>
        </section>

        <section className="secimler">
          <h3>Ek Malzemeler</h3>
          <p>En fazla 10 malzeme seçebilirsiniz. Her biri 5₺</p>
          <label>
            <input type="checkbox" name="Pepperoni" onChange={handleMalzemeSecimi} /> Pepperoni
          </label>
          <label>
            <input type="checkbox" name="Sucuk" onChange={handleMalzemeSecimi} /> Sucuk
          </label>
          <label>
            <input type="checkbox" name="Mısır" onChange={handleMalzemeSecimi} /> Mısır
          </label>
        </section>

        <section className="siparis-ozeti">
          <h3>Sipariş Özeti</h3>
          <p>Seçilen Malzemeler: {secimler.join(', ')}</p>
          <p>Toplam Tutar: {toplam.toFixed(2)}₺</p>
          <button className="siparis-ver">Sipariş Ver</button>
        </section>
      </main>
    </div>
  );
}

export default SiparisSayfasi;

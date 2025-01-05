

import Footer from "../layouts/Footer";

function OnaySayfasi({ userChoices }) {
  return (
    <>
      <section className="order-summary-page">
        <img src="images\iteration-1-images\logo.svg" />
        <div className="sonuc-text">
          <p className="lezzet">lezzetin yolda</p>
          <p style={{ fontFamily: "Roboto Condensed" }} id="siparis-alindi"> SİPARİŞ ALINDI!</p>
        </div>
        <div>
          <h3 style={{ fontFamily: "Barlow" }}>Poisition Absolute Acı Pizza</h3>
          <div>
            <p style={{ fontFamily: "Barlow" }}>
              Boyut : <strong>{userChoices.boyut}</strong>
            </p>
            <p style={{ marginBottom:"30px", fontFamily: "Barlow" }}>
              Hamur : <strong>{userChoices.hamur}</strong>
            </p>
            <div  className="malzemeler-container">
              <p style={{ fontFamily: "Barlow" }} >
              Ek Malzemeler : <span><strong > {userChoices["ek-malzeme"]} </strong></span>
            </p>
            </div>
            
          </div>
        </div>
        <div className="siparis-toplami">
          <h3 style={{ fontFamily: "Barlow" }}>Sipariş Toplamı </h3>
          <div className="secim-harci">
           <strong><p style={{ fontFamily: "Barlow" }}>Seçimler</p></strong> 
            <p>
              <strong>{userChoices.secimler}.00₺</strong>
            </p>
          </div>
          <div className="secim-harci">
            <strong><p style={{ fontFamily: "Barlow" }}>Toplam</p></strong>
            <p>
              <strong>{userChoices.toplam_ucret}₺</strong>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default OnaySayfasi;


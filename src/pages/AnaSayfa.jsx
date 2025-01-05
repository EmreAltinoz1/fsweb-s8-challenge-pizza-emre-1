import React from "react";
import { Link } from "react-router-dom";
import "../css/AnaSayfa.css"; // CSS dosyasını import etmeyi unutmayın
// import CardAdv from "../components/CardAdv"; // CardAdv bileşenini import ediyoruz
// import "../css/CardAdv.css"; // CardAdv bileşeni için CSS dosyası
import Icon1 from "../../images/iteration-2-images/icons/1.svg";
import Icon2 from "../../images/iteration-2-images/icons/2.svg";
import Icon3 from "../../images/iteration-2-images/icons/3.svg";
import Icon4 from "../../images/iteration-2-images/icons/4.svg";
import Icon5 from "../../images/iteration-2-images/icons/5.svg";
import Icon6 from "../../images/iteration-2-images/icons/6.svg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";








const AnaSayfa = () => {
  return (
    <>
    <div className="entry-content">
        <div className="entry-content">
          <img src="images\iteration-1-images\logo.svg" />
          <div>
            <p id="firsat">fırsatı kaçırma</p>
            <p id="catchword">
              KOD ACIKTIRIR <br /> PİZZA DOYURUR
            </p>
          </div>

          <NavLink to="/siparis">
            <button className="giris-btn">ACIKTIM</button>
          </NavLink>
        </div>
      </div>
      <section className="main-container">
        <div className="ul1-container">
         <ul className="ul1">
          <li>
          <a href="" className="ul1-link">
            <img src="images\iteration-2-images\icons\1.svg" />
           YENİ! Kore</a> 
          </li>
          <li>
            <a href="" className="ul1-link">
            <img src="images\iteration-2-images\icons\2.svg" />
            Pizza
            </a>
          </li>
          <li>
            <a href="" className="ul1-link">
            <img src="images\iteration-2-images\icons\3.svg" />
            Burger
            </a>
          </li>
          <li>
            <a href="" className="ul1-link">
            <img src="images\iteration-2-images\icons\4.svg" />
            Kızartmalar
            </a>
          </li>
          <li>
            <a href="" className="ul1-link">
            <img src="images\iteration-2-images\icons\5.svg" />
            Fast food
            </a>
          </li>
          <li>
            <a href="" className="ul1-link">
            <img src="images\iteration-2-images\icons\6.svg" />
            Gazlı İçecek
            </a>
          </li>
        </ul>
        </div>
        <div className="tree">
          <div className="tree-left">
            
            <div className="left-card">
             
              <h2>
                Özel <br />
                Lezzetus
              </h2>
              <p>Posisyone ebsoluşın acı yok burger</p>
              <button  className="order-button">
                SİPARİŞ VER
              </button>
            </div>
          </div>
          <div className="tree-right">
            <div className="right-card-one">
              <h4>
                Dechatlon <br />
                Burger Menü
              </h4>
              <button  className="order-button">
                SİPARİŞ VER
              </button>
            </div>
            <div className="right-card-two">
              <h4>
                <span>Çoooook hızlı</span> <br />
                npm gibi kurye
              </h4>
              <button  className="order-button">
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
        <div className="text1-container">
          <p id="encok">en çok paketlenen menüler</p>
          <p className="xlarge-yazi">Acıktıran Kodlara Doyuran Lezzetler</p>
        </div>
        <ul className="ul2">
          <li>
            <img src="../../images/iteration-2-images/icons/1.svg" />
            YENİ! Kore
          </li>
          <li>
            <img src="../../images/iteration-2-images/icons/2.svg" />
            Pizza
          </li>
          <li>
            <img src="../../images/iteration-2-images/icons/3.svg" />
            Burger
          </li>
          <li>
            <img src="../../images/iteration-2-images/icons/4.svg" />
            Kızartmalar
          </li>
          <li>
            <img src="../../images/iteration-2-images/icons/5.svg" />
            Fast food
          </li>
          <li>
            <img src="../../images/iteration-2-images/icons/6.svg" />
            Gazlı İçecek
          </li>
        </ul>
        <div className="card-favori-container">
      <div className="card-item card-item-1">
        <Link to="/order">
          <img src="images\iteration-2-images\pictures\food-1.png" alt="food-1" className="card-item-img" />
        </Link>
        <h3 className="card-item-title">Terminal Pizza</h3>
        <div className="card-item-details">
          <p className="card-item-price">60₺</p>
          <div className="card-item-pricing">
            <p className="card-item-rating">4.9</p>
            <p className="card-item-reviews">(200)</p>
          </div>
        </div>
      </div>

      <div className="card-item card-item-2">
        <Link to="/order">
          <img src="images\iteration-2-images\pictures\food-2.png" alt="food-2" className="card-item-img" />
        </Link>

        <h3 className="card-item-title">Position Absolute Acı Pizza</h3>
        <div className="card-item-details">
          <p className="card-item-price">45₺</p>
          <div className="card-item-pricing">
            <p className="card-item-rating">4.2</p>
            <p className="card-item-reviews">(130)</p>
          </div>
        </div>
      </div>

      <div className="card-item card-item-3">
        <Link to="">
          <img src="images\iteration-2-images\pictures\food-3.png" alt="food-3" className="card-item-img" />
        </Link>
        <h3 className="card-item-title">useEffect Tavuklu Burger</h3>
        <div className="card-item-details">
          <p className="card-item-price">72₺</p>
          <div className="card-item-pricing">
            <p className="card-item-rating">4.7</p>
            <p className="card-item-reviews">(108)</p>
          </div>
        </div>
      </div>
    </div>
      </section>
      
<section className="footer-section">
        <div>
          <img src="images\iteration-2-images\footer\logo-footer.svg" />
          <div className="icon-bolum">
            <div className="iconkey">
              <img
                src="images\iteration-2-images\footer\icons\icon-1.png"
                alt=""
              />
              <p>341 Londonderry Road, Istanbul Türkiye</p>
            </div>
            <div className="iconkey">
              <img
                src="images\iteration-2-images\footer\icons\icon-2.png"
                alt=""
              />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div className="iconkey">
              <img
                src="images\iteration-2-images\footer\icons\icon-3.png"
                alt=""
              />
              <p>+90 216 123 45 67</p>
            </div>
          </div>
        </div>
        <div className="menuler">
          <h4>Hot Menu</h4>
          <p>Terminal Pizza</p>
          <p>5 Kişilik Hacıbekir Pizza</p>
          <p>useEffect Tavuklu Pizza</p>
          <p>Beyaz Console Frosty</p>
          <p>Testler Geçti Mutlu Burger</p>
          <p>Position Absolute Acı Burger</p>
        </div>
        <div className="insta">
          <h4>Instagram</h4>
          <div className="insta-photos">
            <img src="images\iteration-2-images\footer\insta\li-0.png" alt="" />
            <img src="images\iteration-2-images\footer\insta\li-1.png" alt="" />
            <img src="images\iteration-2-images\footer\insta\li-2.png" alt="" />
            <img src="images\iteration-2-images\footer\insta\li-3.png" alt="" />
            <img src="images\iteration-2-images\footer\insta\li-4.png" alt="" />
            <img src="images\iteration-2-images\footer\insta\li-5.png" alt="" />
          </div>
        </div>
      </section>
      <div className="copyright">
        <p>© 2024 Teknolojik Yemekler.</p>
        <img src="#" alt="" />
      </div>

</>
  );
};

export default AnaSayfa;
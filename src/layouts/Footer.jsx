export default function Footer() {
    return (
      <>
        <section className="footer-section">
        <div>
          <img src="images\iteration-2-images\footer\logo-footer.svg" />
          <div className="iconlu-bolum">
            <div className="iconke">
              <img
                src="images\iteration-2-images\footer\icons\icon-1.png"
                alt=""
              />
              <p>341 Londonderry Road, Istanbul Türkiye</p>
            </div>
            <div className="iconke">
              <img
                src="images\iteration-2-images\footer\icons\icon-2.png"
                alt=""
              />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div className="iconke">
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
  }
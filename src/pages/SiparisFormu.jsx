import { useEffect, useState } from "react";
import SiparisFormuHeader from "../components/Header";
import SiparisFormuInfo from "../components/İnfo";
import PizzaBoyut from "../components/PizzaBoyut";
import PizzaHamur from "../components/PizzaHamur";
import IsimAlani from "../components/İsimAlani";
import EkMalzemeler from "../components/EkMalzemeler";
import SiparisNotu from "../components/SiparişNotu";
import UcretHesap from "../components/ÜcretHesap";

import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form } from "reactstrap";
import Footer from "../layouts/Footer";

const initialSiparis = {
  isim: "",
  boyut: "",
  hamur: "",
  "ek-malzeme": [],
  "order-note": "",
  secimler: 0,
  toplam_ucret: 0,
};

const initialErrors = {
  isim: "",
  boyut: "zorunlu seçim*",
  hamur: "zorunlu seçim-*",
  "ek-malzeme": "",
};

const errorMessages = {
  isim: "İsim en az 3 karakter içermelidir.",
  "ek-malzeme": "En az 4 seçim yapmalısınız.",
};

const pizza_ucreti = 85.5;

const boyutlar = ["S", "M", "L"];

const ekMalzemeler = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
  "Jambon",
];

function SiparisFormu({ setUserChoices }) {
  const [siparis, setSiparis] = useState(initialSiparis);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);
  const [pieces, setpieces] = useState(1);

  useEffect(() => {
    setIsValid(
      siparis.boyut !== "" &&
      siparis.hamur !== "" &&
      siparis.isim.length >= 3 &&
      siparis["ek-malzeme"].length >= 4
    );
    setErrors((prevErrors) => ({
      ...prevErrors,
      ["ek-malzeme"]: siparis["ek-malzeme"].length >= 4 ? "" : errorMessages["ek-malzeme"],
    }));
  }, [siparis]);

  const countHandler = (event) => {
    const { id } = event.target;
    setpieces((prevPieces) =>
      id === "cikar" ? (prevPieces === 1 ? 1 : prevPieces - 1) : prevPieces + 1
    );
  };

  function handleInputChange(event) {
    let { name, value } = event.target;

    if (name === "ek-malzeme") {
      setSiparis((prevSiparis) => ({
        ...prevSiparis,
        [name]: prevSiparis["ek-malzeme"].includes(value)
          ? prevSiparis["ek-malzeme"].filter((malzeme) => malzeme !== value)
          : [...prevSiparis["ek-malzeme"], value],
      }));
    } else {
      setSiparis({ ...siparis, [name]: value });
    }

    name === "isim" &&
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: value.length >= 3 ? "" : errorMessages.isim,
      }));
  }

 
  const ekMalzemelerString = Array.isArray(siparis["ek-malzeme"]) //
    ? siparis["ek-malzeme"].join(", ") 
    : ""; 

  siparis.secimler = siparis["ek-malzeme"].length * 5;
  siparis.toplam_ucret = pieces * (siparis.secimler + pizza_ucreti);
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;

    history.push("/onay");

    
    const updatedSiparis = {
      ...siparis,
      "ek-malzeme": ekMalzemelerString, 
    };

    axios
      .post("https://reqres.in/api/pizza", updatedSiparis)
      .then((response) => {
        console.log("RESPONSE", response.data);
        setUserChoices(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="order-form">
        <SiparisFormuHeader />
        <div className="form">
          <SiparisFormuInfo />
          <div className="pizza-sizes">
            <div className="boyut-secimi">
              <h3>Boyut Seç <p>*</p> </h3>
              {errors.boyut && <p className="error-mesaji">{errors.boyut}</p>}
{boyutlar.map((boyut, index) => (
  <PizzaBoyut
  className={index == 1 ? "data-cy-boyut" : ""}
    key={index}
    boyut={boyut}
    checked={siparis.boyut === boyut}
    onChange={handleInputChange}
  />
))}


            </div>
            <div className="hamur-secme">
              <h3>Hamur Seç<p>*</p></h3>
              {errors.hamur && <p className="error-mesaji">{errors.hamur}</p>}
              <PizzaHamur
                handleInputChange={handleInputChange}
                hamur={siparis.hamur}
              />
            </div>
          </div>
          <div className="ek-malzemeler">
            <h3>Ek Malzemeler</h3>
            <p>En fazla 10 adet seçim yapabilirsiniz. 5₺</p>
            <div className="malzemos">
              {ekMalzemeler.map((malzeme, index) => {
                return (
                  <EkMalzemeler
                  id={"input-checkbox"}
                  
                    className={
                      index >= 10 ? "data-cy-disabled" : "data-cy-not-disabled"
                    }
                    key={index}
                    disabled={
                      siparis["ek-malzeme"].length >= 10 &&
                      !siparis["ek-malzeme"].includes(malzeme)
                    }
                    onChange={handleInputChange}
                    value={malzeme}
                    checked={siparis["ek-malzeme"].includes(malzeme)}
                  />
                );
              })}
            </div>
            {errors["ek-malzeme"] && (
              <p className="error-mesaji">{errors["ek-malzeme"]}</p>
            )}
          </div>
          <div className="isim-alani ">
            <IsimAlani  isim={siparis.isim} onChange={handleInputChange} />
            {errors.isim && <p  className="error-mesaji">{errors.isim}</p>}
          </div>
          <div className="order-note">
            <SiparisNotu
              handleInputChange={handleInputChange}
              siparisnotu={siparis["order-note"]}
            />
          </div>
          <UcretHesap
            handleInputChange={countHandler}
            pieces={pieces}
            ekMalzemeHesabi={siparis["ek-malzeme"].length * 5}
            toplamHesap={
              (pizza_ucreti + siparis["ek-malzeme"].length * 5) * pieces
            }
            disabled={!isValid}
            onClick={handleSubmit}
          />
        </div>
      </Form>
      <Footer />
    </>
  );
}

export default SiparisFormu;
import React from "react";

function OnaySayfasi({ userChoices }) {
  return (
    <div>
      <h1>Sipariş Onayı</h1>
      <p>Boyut: {userChoices.size}</p>
      <p>Malzemeler: {userChoices.toppings?.join(", ")}</p>
      <p>Not: {userChoices.note}</p>
      <p>Siparişiniz alınmıştır!</p>
    </div>
  );
}

export default OnaySayfasi;

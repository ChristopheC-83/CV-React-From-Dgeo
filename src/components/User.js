import React from "react";

export default function User() {
  return (
    <div className="user">
      <img src="./images/photoCV.png" alt="moi-même" />
      <h1 className="name">Christophe C.</h1>
      <p className="profession">Dev en devenir</p>
      <div className="infos">
        <p className="info">4 rue de l'île verte 30420 Calvisson</p>
        <p className="info">
          {" "}
          <a href="tel:+33662535164">06.62.53.51.64</a>
        </p>
        <p className="info">
          {" "}
          <a href="mailto:christophe.chiappetta@gmail.com">
            {" "}
            christophe.chiappetta@gmail.com
          </a>
        </p>
        <p className="info">Date de naissance : 10 novembre 1978</p>
        <p className="info">Lieu de naissance : Toulon (Var)</p>
      </div>
    </div>
  );
}

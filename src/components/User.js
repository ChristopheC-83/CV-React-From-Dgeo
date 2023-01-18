import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function User() {
  return (
    <div className="user">
      <img src="./images/photoCV.png" alt="moi-même" className="avatar"/>
      <h1 className="name">Christophe C.</h1>
      <p className="profession">Dev en devenir</p>
      <div className="infos">
        <p className="info">
          <HomeIcon /> 4 rue de l'île verte 30420 Calvisson
        </p>
        <p className="info">
          <PhoneIcon />
          <a href="tel:+33662535164">06.62.53.51.64</a>
        </p>
        <p className="info">
          <MailIcon />
          <a href="mailto:christophe.chiappetta@gmail.com">
            christophe.chiappetta@gmail.com
          </a>
        </p>
        <p className="info">
          <EventIcon />
          Date de naissance : 10 novembre 1978
        </p>
        <p className="info">
          <LocationOnIcon />
          Lieu de naissance : Toulon (Var)
        </p>
      </div>
    </div>
  );
}

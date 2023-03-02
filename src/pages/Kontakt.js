import React from "react";
import BigHeaderTop from "../components/BigHeaderTop";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";
import "./Kontakt.scss";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
export default function Kontakt() {
  return (
    <div>
      <NavbarComponent />
      <BigHeaderTop />
      <h1 className="title">
        <span style={{ borderBottom: "1px solid orange" }}>Ko</span>ntakt
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 25%",
        }}
        className="adressInfo"
      >
        <div className="kort">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8968.92468434378!2d11.499292!3d55.806587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464d866417cc0aad%3A0xfc0d3c92e509accd!2sN%C3%A6sholmvej%201%2C%204550%20Asn%C3%A6s%2C%20Danmark!5e0!3m2!1sda!2sus!4v1677737406305!5m2!1sda!2sus"
            width="680"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            title="google maps"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="adressText">
          <div>
            <PlaceOutlinedIcon />
            Næsholmvej 1, 4550 Asnæs, Danmark
          </div>
          <div>
            <div>
              <PhoneCallbackOutlinedIcon />
              <a href="tel:42202315">42 20 23 15 </a>
            </div>
            <p>Mellem 9:00 - 10:00 i hverdagene</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

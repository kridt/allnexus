import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import BigHeaderTop from "../components/BigHeaderTop";
import "./Udtagelser.scss";

export default function Udtagelser() {
  const [udtagelser, setUdtagelser] = useState([]);

  useEffect(() => {
    fetch("/uddtagelser.json")
      .then((res) => res.json())
      .then((data) => {
        setUdtagelser(data);
      });
  }, []);

  console.log(udtagelser);

  return (
    <div>
      <NavbarComponent />
      <BigHeaderTop />
      <h1>Udtagelser</h1>

      <div className="udtagelser">
        {udtagelser.map((udtagelse) => {
          return (
            <div className="udtagelse" key={udtagelse.id}>
              <div>
                <img alt="img" src={udtagelse.img} />
              </div>
              <h2>{udtagelse.name}</h2>
              <p>{udtagelse.quote}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

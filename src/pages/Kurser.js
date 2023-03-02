import React from "react";
import BigHeaderTop from "../components/BigHeaderTop";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";
import "./Kurser.scss";

export default function Kurser() {
  const ads = [
    {
      id: 1,
      title: "Reklame 1",
      img: "https://via.placeholder.com/500",
    },
    {
      id: 2,
      title: "Reklame 2",
      img: "https://via.placeholder.com/500",
    },
    {
      id: 3,
      title: "Reklame 3",
      img: "https://via.placeholder.com/500",
    },
  ];

  return (
    <div>
      <NavbarComponent />
      <BigHeaderTop />
      <div className="ads">
        <h1 className="kurserh1">
          <span id="ku">Ku</span>rser, foredrag og ligende.
        </h1>
        <div className="reklamer">
          {ads.map((ad) => {
            return (
              <div className="reklame" key={ad.id}>
                <img src={ad.img} alt={ad.title} />
                <h2>{ad.title}</h2>
              </div>
            );
          })}
        </div>
      </div>

      <div className="foredrag">
        <div className="foredragHeadline">
          <h1>
            <span id="ku">Fo</span>redrag
          </h1>
          <h2>
            <span id="ku">Rundt</span> omkring i det ganske land
          </h2>
        </div>

        <div className="foredragInfo">
          <div className="foredragImg">
            <img src="https://via.placeholder.com/500" alt="placeholder" />
          </div>
          <div className="foredragText">
            <h2>
              Power and Mind afholder foredrag med Grønlandske/danske -
              Spirituel Coach &amp; Healer Annalisa D Larsen
            </h2>
            <p>Hvad er Spiritualitet?</p>
            <p>Hvad er det? Hvad kan man? Hvem kan? Hvorfor kan man.</p>
            <p>Healing, clairvoyance, mediumship?</p>
            <p>Der vil være et par små øvelser for alle.</p>
            <p>Der vil være eksempler på healing. Hvor publikum indrages.</p>
            <p>
              Så hvis du døjer med smerter. så kunne dette være noget for dig.
            </p>
            <p>Foredraget vil vare ca. 1.5- 2 timer.</p>
            <p>
              Lokation: Guldborgsund hallerne/ hallen i Nykøbing Falster (Den
              gamle svømmehal)
            </p>
            <p>
              <strong>-MØDELOKALE 14/15</strong>
            </p>
            Adresse:{" "}
            <a
              rel="noreferrer"
              style={{ color: "black" }}
              target={"_blank"}
              href="https://www.google.com/maps/place/Nørre+Blvd.+4A,+4800+Nykøbing+Falster/@54.7708651,11.8731639,17z/data=!3m1!4b1!4m5!3m4!1s0x47ad305683417cbf:0xd46fcd7acc864fa3!8m2!3d54.7708651!4d11.8753526"
            >
              Nr. Boulevard 4A, 4800 Nykøbing F
            </a>
          </div>
        </div>
      </div>

      <div className="online">
        <h1
          style={{
            color: "orange",
            fontSize: "2.5em",
            fontWeight: "500",
            textAlign: "left",
            marginLeft: "20%",
          }}
        >
          <span id="ku">On</span>line kursus er på vej
        </h1>

        <p style={{ textAlign: "center", marginRight: "28%" }}>Din udvikling</p>

        <div className="onlinePart">
          <div className="onlineImg">
            <img src="https://via.placeholder.com/500" alt="" />
          </div>
          <div className="onlineText">
            <ul>
              <li>
                Connection: Lært at heale på et online forløb: Ny dato snarrest
              </li>
              <li>
                Subconscious / Undebevidsthed- Lær at tiltrække det du drømmer
                om. (afsluttet)
              </li>
              <li>
                Meditationer. få alle mine meditationer til download. vi email.
                skriv til mig i kontakter her eller på facebook. medlems pris 65
                kr pr måned og du kan frit downloade meditationer Pris pr måned
                65.
              </li>
              <li>
                Bliv Master i Penge Flow - fjern dine blokeringer på 12 uger.
                Pris 38.000 kr obs intro pris... er undervejs
              </li>
              <li>
                Energi portalen : Lær alt om energi og hvor dan du bliver den
                absolutte bedste udgave af dig selv. månedelig pris 249. her får
                du alle mediationer jeg laver
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

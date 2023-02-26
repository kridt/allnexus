import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";
import "./LandingPage.scss";

export default function LandingPage() {
  var miniGallery = [
    {
      id: 1,
      img: "/img/miniGallery/1.jpg",
      alt: "miniGallery1",
      text: "Healing workshop",
    },
    {
      id: 2,
      img: "/img/miniGallery/2.jpg",
      alt: "miniGallery1",
      text: "Briks healing",
    },
    {
      id: 3,
      img: "/img/miniGallery/3.jpg",
      alt: "miniGallery1",
      text: "Stol Healing",
    },
    {
      id: 4,
      img: "/img/miniGallery/4.jpg",
      alt: "miniGallery1",
      text: "Healing",
    },
    {
      id: 5,
      img: "/img/miniGallery/5.jpg",
      alt: "miniGallery1",
      text: "Mind Hacks",
    },
    {
      id: 6,
      img: "/img/miniGallery/6.jpg",
      alt: "miniGallery1",
      text: "Annalisa D. Larsen",
    },
    {
      id: 7,
      img: "/img/miniGallery/7.jpg",
      alt: "miniGallery1",
      text: "Loven om tiltrækning",
    },
    {
      id: 8,
      img: "/img/miniGallery/8.jpg",
      alt: "miniGallery1",
      text: "Undervisning",
    },
  ];

  return (
    <div>
      <NavbarComponent />
      <div className="bigHeader">
        <div className="img">
          <img src="/img/backgroundImg.jpeg" alt="background" />
        </div>
        <div className="text">
          <h2>all nexus</h2>
          <p>Healing is a state of being, why not be well</p>
        </div>
      </div>

      <div className="info">
        <div>
          <h3>Lidt om A.L. Nexus</h3>
          <br />
          <p>Annalisa D. Larsen er ejer og grundlægger af: A.L.Nexus</p>
          <p>Spirituel life Coach &amp; Healer</p>
          <p>Uddannelse, kurser og workshops inden for det spirituelle.</p>
          <p>Healing og Healingsworkshops.</p>
          <p>Clairvoyance workshops.</p>
          <p>Loven om tiltrækning og workshops</p>
          <p>
            Underviser i tankemønstre, blokeringer, hæmmende overbevisninger.
          </p>
          <p>
            For at vise hvad du kan med dine egen Power og Mind Intuitiv
            udvikling.
          </p>
          <br />
          <p>En side for spirituel Healing, og spirituel guidning.</p>
          <p>Underviser i hvad, hjerne, krop og sjæl kan.</p>
          <p>Så du bliver et bedre menneske, for dig selv.</p>
          <p>Til at heale og blive healet.</p>
          <p>Heart coherence</p>
          <p>Hjerte energi- healing</p>
          <p>Online Kurser og tilkøb</p>
          <p>Gruppeforløb</p>
          <p>Medlems Grupper på Facebook</p>
          <br />
          <p>Mind Hacks</p>
          <p>Bent reality</p>
        </div>
      </div>

      <div className="miniImgGallery">
        {miniGallery.map((item) => {
          return (
            <div className="miniImg" key={item.id}>
              <img src={item.img} alt={item.alt} />
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>

      <div className="button">
        <Link to={"/priser"}>Læs mere her</Link>
      </div>

      <Footer />
    </div>
  );
}

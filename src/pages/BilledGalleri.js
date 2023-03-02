import { Masonry } from "@mui/lab";
import React from "react";
import BigHeaderTop from "../components/BigHeaderTop";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";

export default function BilledGalleri() {
  const images = [
    {
      id: 1,
      title: "Billede 1",
      img: `https://via.placeholder.com/242x${Math.round(Math.random() * 400)}`,
    },
    {
      id: 2,
      title: "Billede 2",
      img: `https://via.placeholder.com/242x${Math.round(Math.random() * 400)}`,
    },
    {
      id: 3,
      title: "Billede 3",
      img: `https://via.placeholder.com/242x${Math.round(Math.random() * 400)}`,
    },
    {
      id: 4,
      title: "Billede 4",
      img: `https://via.placeholder.com/242x${Math.round(Math.random() * 400)}`,
    },
    {
      id: 5,
      title: "Billede 5",
      img: `https://via.placeholder.com/242x${Math.round(Math.random() * 400)}`,
    },
    {
      id: 6,
      title: "Billede 6",
      img: `https://via.placeholder.com/242x${Math.round(Math.random() * 400)}`,
    },
    {
      id: 7,
      title: "Billede 7",
      img: `https://via.placeholder.com/242x${Math.round(Math.random() * 400)}`,
    },
    {
      id: 8,
      title: "Billede 8",
      img: `https://via.placeholder.com/242x${Math.round(Math.random() * 400)}`,
    },
    {
      id: 9,
      title: "Billede 9",
      img: `https://via.placeholder.com/242x${Math.round(Math.random() * 400)}`,
    },
    {
      id: 10,
      title: "Billede 10",
      img: `https://via.placeholder.com/242x${Math.round(Math.random() * 400)}`,
    },
    {
      id: 11,
      title: "Billede 11",
      img: `https://via.placeholder.com/242x${Math.round(Math.random() * 400)}`,
    },
    {
      id: 12,
      title: "Billede 12",
      img: `https://via.placeholder.com/242x${Math.round(Math.random() * 400)}`,
    },
    {
      id: 13,
      title: "Billede 13",
      img: `https://via.placeholder.com/242x${Math.round(Math.random() * 400)}`,
    },
  ];

  return (
    <div>
      <NavbarComponent />
      <BigHeaderTop />
      <h1>BilledGalleri</h1>
      <div
        style={{ maxWidth: "50vw", margin: "0 auto" }}
        className="billedGalleri"
      >
        <Masonry spacing={1}>
          {images.map((image, index) => (
            <div
              style={{ textAlign: "center" }}
              className="billedGalleriImg"
              key={index}
            >
              <img src={image.img} alt={image.title} />
            </div>
          ))}
        </Masonry>
      </div>
      <Footer />
    </div>
  );
}

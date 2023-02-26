import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; 2019 - {new Date().getFullYear()} NEXUS v/ Annalisa D. Larsen
      </p>
      <p>Alle rettigheder forbeholdes.</p>
      <p>Adresse: Næsholmvej 1, 4550 Asnæs</p>
      <p>CVR: 39670356</p>
    </footer>
  );
}

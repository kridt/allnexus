import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavbarComponent.scss";

export default function NavbarComponent() {
  let activeStyle = {
    textDecoration: "underline",
    textDecorationColor: "orange",
  };

  document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      document.querySelector("nav").classList.add("scrolled");
    } else {
      document.querySelector("nav").classList.remove("scrolled");
    }
  });

  return (
    <nav>
      <ul>
        <div className="logo">
          <li>
            <Link to={"/"}>
              <img alt="logo" src="/img/logoEngel.jpeg" />
            </Link>
          </li>
        </div>
        <div className="links">
          <li>
            <NavLink
              to={"/"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Hjem
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/udtagelser"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Udtagelser
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/kurser"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Kurser, foredrag o.lign.
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/billedgalleri"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Billedgalleri
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/kontakt"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Kontakt
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/vis-mere"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Vis mere
            </NavLink>
          </li>
        </div>
        <div className="cart">
          <li>
            <NavLink
              to={"/cart"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Indkøbskurv
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

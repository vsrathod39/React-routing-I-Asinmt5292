import React from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const links = [
    {
      to: "/",
      title: "Home",
      id: nanoid(),
    },
    {
      to: "/products",
      title: "Products",
      id: nanoid(),
    },
  ];

  return (
    <div className="Navbar-container">
      {links.map(({ id, title, to }) => {
        return (
          <Link key={id} to={to}>
            <p>{title}</p>
          </Link>
        );
      })}
    </div>
  );
}

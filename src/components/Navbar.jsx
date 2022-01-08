import React from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

export default function Navbar() {
  const links = [
    {
      to: "/",
      title: "Home",
      id: nanoid(),
    },
    {
      to: "/about",
      title: "About",
      id: nanoid(),
    },
    {
      to: "/users",
      title: "Users",
      id: nanoid(),
    },
    {
      to: "/contact",
      title: "Contact",
      id: nanoid(),
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {links.map(({ to, title, id }) => {
        return (
          <Link style={{ padding: "10px" }} key={id} to={to}>
            {title}
          </Link>
        );
      })}
    </div>
  );
}

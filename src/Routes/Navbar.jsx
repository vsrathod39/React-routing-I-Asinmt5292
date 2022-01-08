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
      title: "User",
      id: nanoid(),
    },
  ];
  return (
    <div style>
      {links.map(({ to, title, id }) => {
        return (
          <Link key={id} to={to}>
            {title}
          </Link>
        );
      })}
    </div>
  );
}

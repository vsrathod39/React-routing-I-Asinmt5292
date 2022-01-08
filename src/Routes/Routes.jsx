import React from "react";
import Navbar from "../components/Navbar";
import { Route, Routes as Routers } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import ContactMe from "../components/ContactMe";
import Users from "../components/Users";
import ShowUser from "../components/ShowUser";

export default function Routes() {
  return (
    <div>
      <Navbar />
      <Routers>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/user/:id" element={<ShowUser />} />
        <Route path="*" element={<h3>Page not found</h3>} />
      </Routers>
    </div>
  );
}

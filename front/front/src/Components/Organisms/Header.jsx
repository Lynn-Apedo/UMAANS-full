import React from "react";
import Nav from "../Molecules/Nav";

export default function Header() {
  return (
    <header>
      <div className="upperHeader">
        <p>every</p>
        <h1>UMAANS</h1>
        <p>' days</p>
      </div>
      <div className="lowerHeader">
        <Nav />
      </div>
    </header>
  );
}

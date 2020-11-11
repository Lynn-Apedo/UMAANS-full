import React from "react";
import img1 from "../Organisms/img/aboutIMG.jpg";
export default function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutContainer_imgContainer">
          <img src={img1} alt="architecture details" />
        </div>
        <div className="aboutContainer_textContainer">
          <h2 className="aboutContainer_text_titlePage">à propos</h2>
          <br />
          <div className="aboutContainer_text_p">
            <p>
              UMAANS est un des premiers magazines français dédiés exclusivement
              à l'architecture durable. Créé en 2002 sous forme associative, il
              est aujourd'hui bien installé dans le marché des magazines sur
              l'architecture.{" "}
            </p>
            <br />
            <p>
              100% indépendants et avec 18 années d'existence dans le but de
              faire avancer l'habitat durable et le rendre plus accessible.
            </p>{" "}
            <br />
            <p>
              {" "}
              Le magazine est disponible en kiosque et depuis 2019 nous avons
              décidé d'aller plus loin, avec la création de cette plateforme.
              Pour plus d'accessibilité et pour réunir plus de passionnés autour
              du sujet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

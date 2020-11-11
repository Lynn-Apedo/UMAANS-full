import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ContextAuth from "../Context/ContextAuth";

export default function Nav() {
  const { state } = useContext(ContextAuth);
  // const [auth, setAuth] = useState(false);
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    // state.user && console.log("NAV state user:", state.user.firstName);
    // if (localStorage.getItem("user")) {
    //   setAuth(true);
    // }
    return () => {};
  }, [state.isAuthenticated]);

  if (state.isAuthenticated == true) {
    // console.log("Nav -> NAV state", state.isAuthenticated);

    return (
      <nav>
        <ul className="nav-links">
          <Link to="/">
            <div className="login">
              <p>Accueil</p>
            </div>
            {/* <li>Accueil</li> */}
          </Link>
          <Link to="/about">
            <li>A Propos</li>
          </Link>
          <Link to="/projects">
            <li>Projets</li>
          </Link>
          <Link to="/profil">
            <li>Profil</li>
          </Link>
          <Link to="/logout">
            <li onClick={Logout}>Déconnexion</li>
          </Link>
        </ul>
      </nav>
    );
  }
  // console.log("Nav -> NAV state2", state.isAuthenticated);

  return (
    <nav>
      <ul className="nav-links">
        <Link to="/">
          <p>Accueil</p>
        </Link>
        <Link to="/about">
          <li>A Propos</li>
        </Link>
        <Link to="/projects">
          <li>Projets</li>
        </Link>
        <Link to="/signup">
          <li>Inscription</li>
        </Link>
        <Link to="/signin">
          <li>Connexion</li>
        </Link>
      </ul>
    </nav>
  );
}

import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./sass/App.scss";

// import { useParams } from "react-router-dom";

// import Nav from "./Components/Molecules/Nav";

// import Router from "react-router-dom";
import Header from "./Components/Organisms/Header";
import Routes from "./Components/Routes";
import ContextAuth from "./Components/Context/ContextAuth";
import axios from "axios";

// const initialState = {
//   isAuthenticated: !!localStorage.getItem("token"),
//   user: JSON.parse(localStorage.getItem("user")) || {},
//   token: localStorage.getItem("token") || {},
// };
var initialState;
if (localStorage.getItem("user")) {
  initialState = {
    isAuthenticated: true,
    token: localStorage.getItem("token"),
    user: localStorage.getItem("user"),
  };
} else {
  initialState = {
    isAuthenticated: false,
    token: null,
    user: null,
  };
}
// const initialState = {
//   isAuthenticated: false,
//   token: null,
//   user: null,
// };

const reducer = (state, action) => {
  // console.log("ACTION :", action);
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.data.token);
      localStorage.setItem("user", JSON.stringify(action.payload.data.user));
      // console.log("APP User : ", action.payload.data.user);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.data.token,
        user: action.payload.data.user,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case "ADDPROJECT":
      localStorage.getItem("token");
      break;
    case "LOAD_USER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    default:
      return state;
  }
};
// console.log("*************", initialState.isAuthenticated);

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextAuth = {
    state,
    dispatch,
  };

  const token = localStorage.getItem("token");
  // console.log("fetchUser -> APP token", token);
  const user = localStorage.getItem("user");
  // console.log("APP user", user);
  const json = JSON.parse(user);
  // console.log("App -> APP json", json);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8001/api/user/${json.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("fetchUser -> APP result", result);
        if (result.status === 200) {
          dispatch({
            type: "LOAD_USER",
            payload: result.data,
          });
        }
      } catch (error) {
        // console.log("APP error fetch:", error.response);
      }
    };
    fetchUser();
  }, []);

  return (
    <ContextAuth.Provider value={contextAuth}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </ContextAuth.Provider>
  );
}

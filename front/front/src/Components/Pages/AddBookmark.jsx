import React, { useState } from "react";
import axios from "axios";

export default function AddBookmark() {
  const [bookmark, setBookmark] = useState([]);

  const handleChange = async (event) => {};
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return <button>Enregistrer ce projet</button>;
}

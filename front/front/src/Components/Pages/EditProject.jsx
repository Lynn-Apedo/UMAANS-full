import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import Project from "./Project";
import { useHistory } from "react-router-dom";

export default function EditProject() {
  const [editProject, setEditProject] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  console.log("EDITPROJECT project:", editProject);

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setEditProject({
      ...editProject,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    await axios({
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      url: `/api/editproject/${id}`,
      data: editProject,
    });
    history.push("/profil");
  };

  // const deleteProject = (id) => {
  //   // const user = localStorage.getItem("user");
  //   // console.log("deleteProject -> user DELETE", user);
  //   console.log("cyberPunk 2077");

  //   var config = {
  //     method: "delete",
  //     url: `http://localhost:2088/api/projects/${id}`,
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("token"),
  //     },
  //   };
  //   axios(config)
  //     // .delete(`http://localhost:2088/api/projects/${id}`)
  //     .then(function (response) {
  //       console.log("  PREOJECTBYID DELETE AXIOS res. :=======", response);
  //       // setProjectByUserId(response.data.userFound.Projects);
  //       console.log("id delete?", response.data);
  //       console.log("DELETE config?", response.config);
  //     });
  // };

  return (
    <>
      <div className="main">
        <h2 className="main_titlePage">projets</h2>

        <form onSubmit={handleSubmit} className="formContainer_form">
          <label htmlFor="architect" className="formContainer_labels">
            Architecte(s) ou autres:
          </label>
          <input
            type="architect"
            value={editProject.architect}
            name="architect"
            id="architect"
            className="formContainer_inputs"
            onChange={handleChange}
            required
          />

          <label htmlFor="size" className="formContainer_labels">
            Superficie du projet:
          </label>
          <input
            type="number"
            value={editProject.size}
            name="size"
            id="size"
            className="formContainer_inputs"
            onChange={handleChange}
            required
            min="0"
          />

          <label htmlFor="year" className="formContainer_labels">
            Année du projet:
          </label>
          <input
            type="number"
            value={editProject.year}
            name="year"
            id="year"
            className="formContainer_inputs"
            onChange={handleChange}
            required
            min="0"
          />

          <label htmlFor="categoryId" className="formContainer_labels">
            Catégorie du projet:
          </label>
          <select
            name="categoryId"
            id="categoryId"
            className="formContainer_inputs"
            value={editProject.categoryId}
            onChange={handleChange}
            required
          >
            <option name="logement" value="1">
              logement
            </option>
            <option name="renovation" value="2">
              rénovation
            </option>
            <option name="commercialsBureaux" value="3">
              commercials et bureaux
            </option>
            <option name="equipementPublic" value="4">
              équipement public
            </option>
            <option name="education" value="5">
              éducation
            </option>
            <option name="equipementSportif" value="6">
              équipement sportif
            </option>
            <option name="paysageUrbanisme" value="7">
              paysage et urbanisme
            </option>
          </select>

          <label htmlFor="countryId" className="formContainer_labels">
            Pays du projet:
          </label>
          <select
            name="countryId"
            id="countryId"
            className="formContainer_inputs"
            value={editProject.countryId}
            onChange={handleChange}
            required
          >
            <option name="France" value="1">
              France
            </option>
            <option name="Inde" value="2">
              Inde
            </option>
            <option name="Colombie" value="3">
              Colombie
            </option>
            <option name="Colombie" value="4">
              Brésil
            </option>
            <option name="Colombie" value="5">
              Chine
            </option>
            <option name="Colombie" value="6">
              Thailande
            </option>
            <option name="Colombie" value="7">
              Australie
            </option>
            <option name="Colombie" value="9">
              Danemark
            </option>
            <option name="Colombie" value="8">
              Singapour
            </option>
            <option name="Colombie" value="10">
              Angleterre
            </option>
            <option name="Colombie" value="11">
              Taiwan
            </option>
            <option name="Colombie" value="12">
              Indonésie
            </option>
          </select>

          <label htmlFor="title" className="formContainer_labels">
            Titre du projet:
          </label>
          <input
            type="text"
            value={editProject.title}
            name="title"
            id="title"
            className="formContainer_inputs"
            onChange={handleChange}
            required
          />

          <label htmlFor="projectDescr" className="formContainer_labels">
            Description:
          </label>
          <textarea
            type="text"
            value={editProject.projectDescr}
            name="projectDescr"
            id="projectDescr"
            className="formContainer_inputs"
            onChange={handleChange}
            required
          />

          <label htmlFor="mainPicture" className="formContainer_labels">
            Photos (url):
          </label>
          <input
            type="text"
            value={editProject.mainPicture}
            name="mainPicture"
            id="mainPicture"
            className="formContainer_inputs"
            onChange={handleChange}
            required
          />

          {/* {error} */}
          <button type="submit" value="Envoyer" id="btn" onClick={handleSubmit}>
            Envoyer
          </button>
        </form>
      </div>

      {/* <button onClick={deleteProject}>SUPPRIMER</button> */}
    </>
  );
}

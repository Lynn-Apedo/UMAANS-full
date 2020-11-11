import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Project() {
  const [project, setProject] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  console.log("PROJECT project:", project);
  console.log("PROJECT project2:", project.id);

  useEffect(() => {
    var config = {
      method: "get",
      url: `http://localhost:2088/api/projects/${id}`,
    };
    console.log("PROJECT ok");

    axios(config)
      .then(function (response) {
        console.log("PROJECT response-data-project =====", response.data);
        setProject(response.data.projectFound);
        console.log(
          "PROJECT response-data-project.projectFound.Category.categoryName =====",
          response.data.projectFound.Category.categoryName
        );
        console.log(
          "PROJECT response-data-project.projectFound.Country.countryName =====",
          response.data.projectFound.Country.countryName
        );
      })
      .catch(function (error) {
        console.log("PROJECT error axios:", error.response);
      });
    console.log("PROJECT id:", id);
  }, [id]);

  const projectId = project.id;
  console.log("Project -> projectId PROJECT ID ID", projectId);

  const deleteProject = async () => {
    console.log("PEACE");
    var config = {
      method: "delete",
      url: `http://localhost:2088/api/projects/${projectId}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    console.log("deleteProject -> projectId PLEASE", projectId);

    axios(config)
      .then(function (response) {
        console.log("DELETE res.data.proj:", response.data);
        setProject(response.data);
      })
      .catch(function (error) {
        console.log("DELETE error axios:", error.response);
      });
    history.push("/profil");
  };

  return (
    <>
      <div className="main">
        <h2 className="main_titlePage">projets</h2>
        <div className="main_projectContainer">
          <img
            className="main_projectContainer_img"
            src={project.mainPicture}
            alt="couverture"
          />
          <br />
          <br />
          <p className="main_projectContainer_archi">{project.architect}</p>
          <p>Superficie: {project.size} m²</p>
          <p>Années: {project.year}</p>
          <br />
          <p className="main_projectContainer_titleBuilding">{project.title}</p>
          <p>{project.projectDescr}</p>

          <button onClick={deleteProject}>SUPPRIMER</button>
        </div>
      </div>
    </>
  );
}

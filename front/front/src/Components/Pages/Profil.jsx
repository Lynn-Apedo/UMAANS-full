import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function Profil() {
  const [profils, setProfils] = useState([]);
  // console.log("Profil -> PROFIL profils Projects", profils.Projects);

  const [ProjectByUserId, setProjectByUserId] = useState([]);
  // console.log("ProjectByUserId -> HELLOOOOOO profils", profils);
  // console.log("ProjectByUserId -> HELLOOOOOO profils", profils.id);
  // const { id } = useParams();

  // const [deleteProjectId, setDeleteProjectId] = useState();
  // console.log("Profil -> deleteProjectId DELETE state", deleteProjectId);

  useEffect(() => {
    var config = {
      method: "get",
      url: `http://localhost:2088/api/user/${profils.id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        // console.log("PROFIL AXIOS res. :=======", response.data.userFound);

        setProfils(response.data.userFound);
      })
      .catch(function (error) {
        // console.log("PROFIL error axios catch:", error.response);
      });
  }, []);

  useEffect(() => {
    var config = {
      method: "get",
      url: `http://localhost:2088/api/getprojects/${profils}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    // console.log("CYBERPUNK 2077 1");

    axios(config)
      .then(function (response) {
        // console.log("CYBERPUNK 2077 2");

        // console.log(
        //   "PROJECTBYUSERID AXIOS res. :=======",
        //   response.data.projectFound
        // );
        // console.log(
        //   "PROJECTBYUSERID AXIOS res.USERID :=======",
        //   response.data.projectFound.userId
        // );
        setProjectByUserId(response.data.projectFound);
      })
      .catch(function (error) {
        // console.log("PROJECTBYUSERID error axios catch:", error.response);
      });
    // console.log("CYBERPUNK 2077 3");
  }, []);

  // const deleteProject = async (id) => {
  //   console.log("PEACE");
  //   var config = {
  //     method: "delete",
  //     url: `http://localhost:2088/api/projects/${id}`,
  //     // headers: {
  //     //   Authorization: localStorage.getItem("token"),
  //     // },
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log("DELETE res.data.proj:", response.data);
  //       setDeleteProjectId(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log("DELETE error axios:", error.response);
  //     });
  // };

  return (
    <>
      <div className="profilContainer">
        <h2 className="profilContainer_titlePage">information personnels</h2>
        <div className="profilContainer_infoContainer">
          <p className="profilContainer_infoContainer_profilName">
            {" "}
            {profils.firstName} {profils.lastName}
          </p>
          <p className="profilContainer_infoContainer_entrepriseName">
            {profils.email}
          </p>
          <Link to="/addproject">
            <button id="btn-green">Ajouter un projets</button>
          </Link>
        </div>
      </div>

      {/* <ProjectByUserId /> */}
      <div className="savedProjectContainer">
        <h2 className="savedProjectContainer_titlePage">vos publications</h2>

        <div className="savedProjectContainer_projectsContainer">
          {ProjectByUserId.map((project, i) => (
            <div
              key={i}
              className="savedProjectContainer_projectsContainer_projectContainer"
            >
              <Link
                className="savedProjectContainer_projectsContainer_projectContainer_link"
                to={`/projectprofil/${project.id}`}
              >
                <img
                  className="savedProjectContainer_projectsContainer_projectContainer_img"
                  src={project.mainPicture}
                  alt="couverture"
                />
                <div className="savedProjectContainer_projectsContainer_projectContainer_fiche">
                  <p className="savedProjectContainer_projectsContainer_projectContainer_fiche_titleArchitectes">
                    {project.title} - {project.architect}
                  </p>
                </div>
              </Link>
              <Link to={`/editproject/${project.id}`}>
                <button>MODIFIER</button>
              </Link>
              {/* <button onClick={deleteProject}>SUPPRIMER</button> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

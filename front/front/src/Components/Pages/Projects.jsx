import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import FormData from "form-data";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  // const { id } = useParams();

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://localhost:2088/api/getprojects",
      // headers: {
      //   Authorization: localStorage.getItem("token"),
      // },
    };

    axios(config)
      .then(function (response) {
        // console.log("PROJECTS res.data.proj:", response.data.projectFound);
        setProjects(response.data.projectFound);
      })
      .catch(function (error) {
        // console.log("PROJECTS error axios:", error.response);
      });
  }, []);

  return (
    <>
      <div className="main">
        <h2 className="main_titlePage">projets</h2>
        <div className="main_projectsContainer">
          {projects.map((project, i) => (
            <div key={i} className="main_projectsContainer_projectContainer">
              <Link
                className="main_projectsContainer_projectContainer_link"
                to={`/projects/${project.id}`}
              >
                <img
                  className="main_projectsContainer_projectContainer_img"
                  src={project.mainPicture}
                  alt="couverture"
                />
                <div className="main_projectsContainer_projectContainer_fiche">
                  <p className="main_projectsContainer_projectContainer_fiche_country">
                    {project["Category.categoryName"]} <spans>&#45; </spans>
                    {project["Country.countryName"]}{" "}
                  </p>
                  <p className="main_projectsContainer_projectContainer_fiche_titleArchitectes">
                    {project.title} - {project.architect}
                  </p>
                </div>
                {/* <button
                      onChange={() => {
                        console.log(project.id);
                      }}
                    >
                      Add a bookmark
                    </button> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

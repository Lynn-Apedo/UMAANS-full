// import React from "react";
// import axios from "axios";
// import Profil from "../Pages/Profil";

// import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// export default function ProjectByUserId() {
//   const [ProjectByUserId, setProjectByUserId] = useState([]);
//   console.log("ProjectByUserId -> HELLOOOOOO profils", profils);

//   console.log("Profil -> PROJECTBYUSERID profils Projects", ProjectByUserId);
//   const user = localStorage.getItem("user");
//   console.log("ProjectByUserId -> user", user);
//   console.log("ProjectByUserId -> user2", user.id);

//   useEffect(() => {
//     var config = {
//       method: "get",
//       url: `http://localhost:2088/api/getprojects/7`,
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       },
//     };
//     console.log("CYBERPUNK 2077 1");

//     axios(config)
//       .then(function (response) {
//         console.log("CYBERPUNK 2077 2");

//         console.log(
//           "PROJECTBYUSERID AXIOS res. :=======",
//           response.data.projectFound
//         );
//         console.log(
//           "PROJECTBYUSERID AXIOS res.USERID :=======",
//           response.data.projectFound.userId
//         );
//         setProjectByUserId(response.data.projectFound);
//       })
//       .catch(function (error) {
//         console.log("PROJECTBYUSERID error axios catch:", error.response);
//       });
//     console.log("CYBERPUNK 2077 3");
//   }, []);

//   return (
//     <>
//       <div className="savedProjectContainer">
//         <h2 className="savedProjectContainer_titlePage">vos publications</h2>

//         <div className="savedProjectContainer_projectsContainer">
//           {ProjectByUserId.map((project, i) => (
//             <div
//               key={i}
//               className="savedProjectContainer_projectsContainer_projectContainer"
//             >
//               <Link
//                 className="savedProjectContainer_projectsContainer_projectContainer_link"
//                 to={`/editproject/${project.id}`}
//               >
//                 <img
//                   className="savedProjectContainer_projectsContainer_projectContainer_img"
//                   src={project.mainPicture}
//                   alt="couverture"
//                 />
//                 <div className="savedProjectContainer_projectsContainer_projectContainer_fiche">
//                   {/* <p className="savedProjectContainer_projectsContainer_projectContainer_fiche_country">
//                     {project["Category.categoryName"]} <spans>&#45; </spans>
//                     {project["Country.countryName"]}
//                   </p> */}
//                   <p className="savedProjectContainer_projectsContainer_projectContainer_fiche_titleArchitectes">
//                     {project.title} - {project.architect}
//                   </p>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

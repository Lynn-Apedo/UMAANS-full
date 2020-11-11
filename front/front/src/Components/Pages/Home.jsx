import React from "react";
// import { withRouter } from "react-router-dom";

import Agenda from "../Organisms/Agenda";
import Projects from "../Pages/Projects";
import Slider from "../Organisms/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <Agenda />
      <Projects />
    </>
  );
}

// function Home() {
//   return (
//     <>
//       <h1>Home</h1>
//       <Agenda />
//       <ScrollProjects />
//     </>
//   );
// }

// export default withRouter(Home);

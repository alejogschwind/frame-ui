import React, { useEffect, useState } from "react";
import routes from './routes';

import ProjectsContext from "./context/projects";
import HeadersContext from "./context/headers";
import DarkContext from "./context/dark";

function App() {
  const [headers, setHeaders] = useState([]);
  const [projects, setProjects] = useState([]);
  const [dark, setDark] = useState(false);


  useEffect(() => {
    if (dark)
      document.querySelector("body").style.setProperty("background", "#000");
    else
      document.querySelector("body").style.setProperty("background", "#fff");
  }, [dark]);

  return (
    <HeadersContext.Provider value={{ headers, setHeaders }}>
      <ProjectsContext.Provider value={{ projects, setProjects }}>
        <DarkContext.Provider value={{ dark, setDark }}>
          {routes()}
        </DarkContext.Provider>
      </ProjectsContext.Provider>
    </HeadersContext.Provider>
  );
}

export default App;

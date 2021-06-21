import React, { useState } from "react";
import routes from './routes';

import ProjectsContext from "./context/projects";
import HeadersContext from "./context/headers";

function App() {
  const [headers, setHeaders] = useState([]);
  const [projects, setProjects] = useState([]);

  return (
    <HeadersContext.Provider value={{ headers, setHeaders }}>
      <ProjectsContext.Provider value={{ projects, setProjects }}>
        {routes()}
      </ProjectsContext.Provider>
    </HeadersContext.Provider>
  );
}

export default App;

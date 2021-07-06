import React, { Suspense, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import routes from './routes';

import ProjectsContext from "./context/projects";
import HeadersContext from "./context/headers";
import DarkContext from "./context/dark";
import LanguageContext from "./context/language";

function App() {
  const [headers, setHeaders] = useState([]);
  const [projects, setProjects] = useState([]);
  const [dark, setDark] = useState(false);
  const { i18n } = useTranslation();
  const [lan, setLan] = useState(i18n.language);

  const languages = ["es", "en"];
  useEffect(() => {
    if (dark)
      document.querySelector("body").style.setProperty("background", "#000");
    else
      document.querySelector("body").style.setProperty("background", "#fff");
  }, [dark]);

  useEffect(() => {
    i18n.changeLanguage(lan);
  }, [lan]);

  return (
    <Suspense fallback="loading">
      <HeadersContext.Provider value={{ headers, setHeaders }}>
        <ProjectsContext.Provider value={{ projects, setProjects }}>
          <DarkContext.Provider value={{ dark, setDark }}>
            <LanguageContext.Provider value={{ languages, lan, setLan }}>
              {routes()}
            </LanguageContext.Provider>
          </DarkContext.Provider>
        </ProjectsContext.Provider>
      </HeadersContext.Provider>
    </Suspense>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage"
import ProjectPage from "./components/pages/ProjectPage"
import NutritionPage from "./components/pages/NutritionPage"
import { IconContext } from "react-icons"

const App = () => {
  return (
    <IconContext.Provider value={{color: "hsl(175, 70%, 18%)"}}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/projects" element={<ProjectPage />}/>
          <Route path="/nutrition" element={<NutritionPage />}/>
        </Routes>
      </Router>
    </IconContext.Provider>
  )
};

export default App;
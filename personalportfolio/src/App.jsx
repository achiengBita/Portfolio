import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage"
import ProjectPage from "./components/pages/ProjectPage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/projects" element={<ProjectPage />}/>
      </Routes>
    </Router>
  )
};

export default App;
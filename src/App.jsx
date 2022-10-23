import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Project from "./components/Projects/index";
import "./App.css";
// uuid start
// toastify start

import "react-toastify/dist/ReactToastify.css";
import Errors from "./components/Error/errors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//  form impute
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Project />} />
            <Route path="*" element={<Errors />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;

import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Station from "./Components/Station/Station";
import Surface from "./Components/Surface/Surface";

import Mars from "./Components/Mars/Mars";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="h-screen w-screen relative ">
        <Topbar />
        <Menu />
        <Routes>
          <Route path="/" element={<Mars />} />
          <Route path="/station" element={<Station />} />
          <Route path="/surface" element={<Surface />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

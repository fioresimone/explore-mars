import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Station from "./Components/Station/Station";
import Surface from "./Components/Surface/Surface";

import Mars from "./Components/Mars/Mars";
import Menu from "./Components/Menu/Menu";
import Bottombar from "./Components/Bottombar/Bottombar";

import Spacecrafts from "./Components/Spacecrafts/Spacecrafts";
import Orbiters from "./Components/Orbiters/Orbiters";

//const OtherComponent = React.lazy(() => import('./OtherComponent'));

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="h-screen w-screen relative">
        <Topbar />
        <Menu />
        <Bottombar />

        <Routes>
          <Route path="/" element={<Mars />} />
          <Route path="/station" element={<Station />} />
          <Route path="/surface" element={<Surface />} />
          <Route path="/spacecrafts/:modelName" element={<Spacecrafts />} />
          <Route path="/orbiters/:modelName" element={<Orbiters />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

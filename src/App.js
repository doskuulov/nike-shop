import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Avia from "./components/avia/avia";
import Cloth from "./components/cloth/cloth";
import Elect from "./components/elect/Elect";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="avia" element={<Avia />} />
        <Route path="cloth" element={<Cloth />} />
        <Route path="elect" element={<Elect />} />
      </Routes>
    </>
  );
}

export default App;

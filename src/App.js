import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Avia from "./components/avia/avia";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="avia" element={<Avia />} />
      </Routes>
    </>
  );
}

export default App;

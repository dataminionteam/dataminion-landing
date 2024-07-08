import { HashRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./home";
import FAQ from "./faq";
import TOS from "./tos";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/tos" element={<TOS />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

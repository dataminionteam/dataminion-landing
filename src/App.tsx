import { HashRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
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
      <Footer />
    </HashRouter>
  );
}

export default App;

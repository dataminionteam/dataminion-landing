import Contact from "./components/contact";
import Footer from "./components/footer";
import Heading from "./components/heading";
import Intro from "./components/intro";
import Models from "./components/models";
import Navbar from "./components/navbar";
import Pricing from "./components/pricing";
import Privacy from "./components/privacy";
import Tiles from "./components/tiles";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-color-pattern bg-[100vw_auto] bg-no-repeat font-publicSans">
        <Heading />
        <Intro />
        <Tiles />
        <Models />
        <Privacy />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

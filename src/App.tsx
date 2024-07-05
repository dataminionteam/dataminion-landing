import Heading from "./components/heading";
import Intro from "./components/intro";
import Models from "./components/models";
import Navbar from "./components/navbar";
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
        <div className="h-[calc(100dvh)] p-4 bg-purple box-border">
          <div className="w-full h-2/5">
            <p>Pricing</p>
          </div>
          <div className="flex gap-1 w-full h-3/5 box-border">
            <div className="w-1/4 h-full bg-aqua"></div>
            <div className="w-1/4 h-full bg-aqua"></div>
            <div className="w-1/4 h-full bg-aqua"></div>
            <div className="w-1/4 h-full bg-aqua"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

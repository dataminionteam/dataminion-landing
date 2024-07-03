import Heading from "./components/heading";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Tiles from "./components/tiles";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-color-pattern bg-[100vw_auto] font-publicSans">
        <Heading />
        <Intro />
        <Tiles />
        <div className="flex justify-between p-8 p-4 bg-purple2 box-border">
          <div className="w-60 h-60 bg-black"></div>
          <div className="w-60 h-60 bg-black"></div>
          <div className="w-60 h-60 bg-black"></div>
        </div>
        <div className="h-[calc(100dvh)] p-4 box-border">
          <div className="bg-slate rounded-3xl size-full box-border"></div>
        </div>
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

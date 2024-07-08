import Contact from "./components/contact";
import Heading from "./components/heading";
import Intro from "./components/intro";
import Models from "./components/models";
import Pricing from "./components/pricing";
import Privacy from "./components/privacy";
import Tiles from "./components/tiles";

export default function Home() {
  return (
    <div className="bg-color-pattern bg-[100vw_auto] bg-no-repeat font-publicSans">
      <Heading />
      <Intro />
      <Tiles />
      <Models />
      <Privacy />
      <Pricing />
      <Contact />
    </div>
  );
}

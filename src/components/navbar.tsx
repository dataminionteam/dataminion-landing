import { Link } from "react-router-dom";
import minion from "../assets/minion.svg";

export default function Navbar({ route }: { route: string }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between w-full h-24 p-4 sm:py-6">
      <Link to="/" className="h-12 w-72 max-w-full">
        <img src={minion} className="m-2" />
      </Link>
      {route === "/" ? (
        <a
          href="https://app.dataminion.ai"
          className="flex items-center w-fit px-4 bg-purple hover:bg-purpleDark text-white rounded-md transition-colors font-publicSans font-semibold"
        >
          Log In / Sign Up
        </a>
      ) : (
        <></>
      )}
    </div>
  );
}

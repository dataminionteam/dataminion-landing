import { Link } from "react-router-dom";
import minion from "../assets/minion.svg";

export default function Navbar({ route }: { route: string }) {
  return (
    <div className="flex justify-between w-full h-24 p-4 py-6">
      <Link to="/" className="h-12 w-72">
        <img src={minion} className="m-2" />
      </Link>
      { route === "/" ? <a
        href="https://app.dataminion.ai"
        className="flex items-center px-4 bg-purple text-white rounded-md font-publicSans font-semibold"
      >
        Log In / Sign Up
      </a> : <></>}
      
    </div>
  );
}

import minion from "../assets/minion.svg";

export default function Navbar() {
  return (
    <div className="flex justify-between w-full h-24 p-4 py-6">
      <img src={minion} className="m-2" />
      <a
        href="https://app.dataminion.ai"
        className="flex items-center px-4 bg-purple text-white rounded-md font-publicSans font-semibold"
      >
        Log In / Sign Up
      </a>
    </div>
  );
}

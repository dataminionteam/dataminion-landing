import { Link } from "react-router-dom";

export default function Footer({ route }: { route: string}) {
  return (
    <div className="flex flex-col items-center w-full h-[5rem] p-4">
      <p>Copyright © 2024 DATAMINION. All rights reserved.</p>
      <div className="flex justify-center gap-8">
        { route === "/tos" ? 
        <p>
          End User Agreement
        </p> : 
        <Link to="/tos" className="underline">
          End User Agreement
        </Link>}
        { route === "/faq" ? <p>
          FAQ
        </p> : 
        <Link to="/faq" className="underline">
          FAQ
        </Link>}
      </div>
    </div>
  );
}

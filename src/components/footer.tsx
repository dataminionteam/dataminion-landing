import { Link } from "react-router-dom";

export default function Footer({ route }: { route: string }) {
  return (
    <div className="flex flex-col justify-center gap-2 items-center w-full h-[5rem] p-4">
      <p className="text-center text-xs sm:text-base">
        Copyright © 2024 DATAMINION. All rights reserved.
      </p>
      <div className="flex justify-center gap-8">
        {route === "/tos" ? (
          <p className="text-xs sm:text-base">End User Agreement</p>
        ) : (
          <Link to="/tos" className="text-xs sm:text-base underline">
            End User Agreement
          </Link>
        )}
        {route === "/faq" ? (
          <p className="text-xs sm:text-base">FAQ</p>
        ) : (
          <Link to="/faq" className="text-xs sm:text-base underline">
            FAQ
          </Link>
        )}
      </div>
    </div>
  );
}

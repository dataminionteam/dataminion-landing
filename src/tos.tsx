import { useEffect } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function TOS() {
  useEffect(() => {
    document.title = "End User Agreement | DATAMINION";
  }, []);

  return (
    <>
      <Navbar route="/tos" />
      <p>TOS</p>
      <Footer route="/tos" />
    </>
  );
}

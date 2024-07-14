import { useEffect } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function FAQ() {
  useEffect(() => {
    document.title = "FAQs | DATAMINION";
  }, []);

  return (
    <>
      <Navbar route="/faq" />
      <p>FAQ</p>
      <Footer route="/faq" />
    </>
  );
}

import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import questions from "./questions.json";
import Dropdown from "./components/dropdown";

export default function FAQ() {
  const [tab, setTab] = useState(0); // Tabs from 0-2
  const [curr, setCurr] = useState(-1); // Open Question #

  useEffect(() => {
    document.title = "FAQs | DATAMINION";
  }, []);

  function toggleTab(i: number) {
    setCurr(-1);
    setTab(i);
  }

  function toggleNum(i: number) {
    setCurr(curr === i ? -1 : i);
  }

  const tabSelected = "p-2 text-purple font-bold";
  const tabAvailable = "p-2 hover:text-purple transition-colors tracking-wide";

  return (
    <>
      <Navbar route="/faq" />
      <p className="text-3xl md:text-5xl font-bold p-8 md:p-16 font-publicSans">
        Frequently Asked Questions
      </p>
      <div className="min-h-[calc(100vh-22rem)] w-full pb-4 px-8 md:px-16 font-publicSans">
        <nav className="flex gap-4 items-end">
          {tab === 0 ? (
            <p className={tabSelected}>General</p>
          ) : (
            <button className={tabAvailable} onClick={() => toggleTab(0)}>
              General
            </button>
          )}
          {tab === 1 ? (
            <p className={tabSelected}>Payments and Plans</p>
          ) : (
            <button className={tabAvailable} onClick={() => toggleTab(1)}>
              Payments and Plans
            </button>
          )}
          {tab === 2 ? (
            <p className={tabSelected}>Beta</p>
          ) : (
            <button className={tabAvailable} onClick={() => toggleTab(2)}>
              Beta
            </button>
          )}
        </nav>
        {questions.list.map((l, i) =>
          l.map((e, j) => (
            <Dropdown
              toggleNum={toggleNum}
              question={e.question}
              answer={e.answer}
              group={i}
              tab={tab}
              curr={curr}
              idx={j}
            />
          )),
        )}
      </div>
      <Footer route="/faq" />
    </>
  );
}

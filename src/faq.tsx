import { useEffect, useState } from "react";

import close from "./assets/close.svg";
import Dropdown from "./components/dropdown";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import questions from "./questions.json";
import search from "./assets/search.svg";

export default function FAQ() {
  const [isSearch, setIsSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(true);
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

  function searchFor(q: string) {
    setQuery(q);
    setResult(
      questions.list
        .flat()
        .some(
          (e) =>
            e.question.toLowerCase().includes(q.toLowerCase()) ||
            e.answer.toLowerCase().includes(q.toLowerCase()),
        ),
    );
  }

  const tabSelected = "p-2 text-purple font-bold";
  const tabAvailable = "p-2 hover:text-purple transition-colors tracking-wide";

  return (
    <>
      <Navbar route="/faq" />
      <p className="text-3xl md:text-5xl font-bold p-8 md:px-16 font-publicSans">
        Frequently Asked Questions
      </p>
      <div className="min-h-[calc(100vh-18rem)] w-full pb-4 px-8 md:px-16 font-publicSans">
        <div className="flex justify-end h-[4rem] relative">
          {isSearch ? (
            <>
              <input
                className="w-full h-10 text-base px-10 bg-white border border-slate"
                placeholder="Looking for something?"
                value={query}
                onChange={(e) => searchFor(e.target.value)}
              />
              <img
                className="absolute right-0 h-10 cursor-pointer"
                src={close}
                onClick={() => setIsSearch(false)}
              />
              <img className="absolute left-0 h-10 p-1" src={search} />
            </>
          ) : (
            <img
              className="h-10 p-1 cursor-pointer"
              src={search}
              onClick={() => setIsSearch(true)}
            />
          )}
        </div>
        <nav className="flex gap-4 items-end">
          {query ? (
            result ? (
              <p>
                Showing results for: <b>{query}</b>
              </p>
            ) : (
              <p>
                Sorry, we could not find any results to match your search
                criteria. <br />
                Please try again with some different keywords.
              </p>
            )
          ) : tab === 0 ? (
            <>
              <p className={tabSelected}>General</p>
              <button className={tabAvailable} onClick={() => toggleTab(1)}>
                Payments and Plans
              </button>
              <button className={tabAvailable} onClick={() => toggleTab(2)}>
                Beta
              </button>
            </>
          ) : tab === 1 ? (
            <>
              <button className={tabAvailable} onClick={() => toggleTab(0)}>
                General
              </button>
              <p className={tabSelected}>Payments and Plans</p>
              <button className={tabAvailable} onClick={() => toggleTab(2)}>
                Beta
              </button>
            </>
          ) : (
            <>
              <button className={tabAvailable} onClick={() => toggleTab(0)}>
                General
              </button>
              <button className={tabAvailable} onClick={() => toggleTab(1)}>
                Payments and Plans
              </button>
              <p className={tabSelected}>Beta</p>
            </>
          )}
        </nav>
        {query
          ? questions.list
              .flat()
              .filter(
                (e) =>
                  e.question.toLowerCase().includes(query.toLowerCase()) ||
                  e.answer.toLowerCase().includes(query.toLowerCase()),
              )
              .map((e, j) => (
                <Dropdown
                  key={j}
                  toggleNum={toggleNum}
                  question={e.question}
                  answer={e.answer}
                  group={0}
                  tab={tab}
                  curr={curr}
                  idx={j}
                />
              ))
          : questions.list.map((l, i) =>
              l.map((e, j) => (
                <Dropdown
                  key={i.toString() + j.toString()}
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

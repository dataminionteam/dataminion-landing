import arrowUp from "../assets/arrow-up.svg";
import arrowDown from "../assets/arrow-down.svg";

interface DropdownProps {
  toggleNum: (i: number) => void;
  question: string;
  answer: string;
  group: number;
  tab: number;
  curr: number;
  idx: number;
}

export default function Dropdown({
  toggleNum,
  question,
  answer,
  group,
  tab,
  curr,
  idx,
}: DropdownProps) {
  return (
    <div
      className={`${group < 0 || tab === group ? "flex" : "hidden"} flex-1 flex-col py-4 text-lg font-medium border-b border-slate`}
    >
      <div
        className="flex justify-between py-4 md:px-2 cursor-pointer"
        onClick={() => toggleNum(idx)}
      >
        <p>{question}</p>
        <img src={curr === idx ? arrowUp : arrowDown} />
      </div>
      {curr === idx && <p className="md:px-2 py-2">{answer}</p>}
    </div>
  );
}

import tileA from "../assets/tile-a.png";
import tileB from "../assets/tile-b.png";
import tileC from "../assets/tile-c.png";

export default function Tiles() {
  return (
    <div className="flex flex-wrap gap-2 h-[calc(120dvh)] p-4">
      <div className="rounded-3xl border border-slate w-[calc(35%-0.5rem)] h-1/3 bg-purple text-white text-[4vw] leading-[4vw] font-extrabold flex items-center p-8">
        We Can Help with Studying
      </div>
      <div className="rounded-3xl border border-slate w-[65%] h-1/3">
        <img src={tileA} className="size-full object-cover rounded-3xl" />
      </div>
      <div className="rounded-3xl border border-slate w-[65%] h-1/3">
        <img src={tileB} className="size-full object-cover rounded-3xl" />
      </div>
      <div className="rounded-3xl border border-slate w-[calc(35%-0.5rem)] h-1/3 bg-purple text-white text-[4vw] leading-[4vw] font-extrabold flex items-center p-8">
        with Manuals and Guides
      </div>
      <div className="rounded-3xl border border-slate w-[calc(35%-0.5rem)] h-1/3 bg-purple text-white text-[4vw] leading-[4vw] font-extrabold flex items-center p-8">
        and Legal Documents
      </div>
      <div className="rounded-3xl border border-slate w-[65%] h-1/3">
        <img src={tileC} className="size-full object-cover rounded-3xl" />
      </div>
    </div>
  );
}

import tileA from "../assets/tile-a.png";
import tileB from "../assets/tile-b.png";
import tileC from "../assets/tile-c.png";

export default function Tiles() {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      <div className="flex rounded-xl sm:rounded-3xl w-full sm:w-[calc(35%-0.5rem)] h-[40vdh] bg-purple text-white text-[4vw] leading-[4vw] font-bold items-center text-center sm:text-left p-4 sm:p-8">
        We Can Help with Studying
      </div>
      <div className="rounded-3xl w-full sm:w-[65%] h-[40vdh]">
        <img src={tileA} className="size-full object-cover rounded-3xl" />
      </div>
      <div className="flex flex-col-reverse sm:flex-row gap-2">
        <div className="rounded-3xl w-full sm:w-[65%] h-[40vdh]">
          <img src={tileB} className="size-full object-cover rounded-3xl" />
        </div>
        <div className="flex rounded-xl sm:rounded-3xl w-full sm:w-[calc(35%-0.5rem)] h-[40vdh] bg-purple text-white text-[4vw] leading-[4vw] font-bold items-center text-center sm:text-left p-4 sm:p-8">
          with Manuals and Guides
        </div>
      </div>
      <div className="flex rounded-xl sm:rounded-3xl w-full sm:w-[calc(35%-0.5rem)] h-[40vdh] bg-purple text-white text-[4vw] leading-[4vw] font-bold items-center text-center sm:text-left p-4 sm:p-8">
        and Legal Documents
      </div>
      <div className="rounded-3xl w-full sm:w-[65%] h-[40vdh]">
        <img src={tileC} className="size-full object-cover rounded-3xl" />
      </div>
    </div>
  );
}

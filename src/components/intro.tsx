import video from "../assets/demo.mp4";
import minionbot from "../assets/minionbot.svg";

export default function Intro() {
  return (
    <div className="h-[calc(100dvh)] p-6 bg-transparent box-border">
      <div className="flex items-center size-full bg-whiteOverlay rounded-3xl">
        <div className="flex flex-col gap-3 items-center justify-center w-1/2">
          <p className="w-3/5 text-left text-[36px] lg:text-[48px] font-black">
            Introducing
          </p>
          <img src={minionbot} className="w-3/5 mb-8" />
          <div className="flex items-center gap-4 w-3/5 text-left font-black">
            <p className="w-8 h-8 flex items-center justify-center text-sm rounded-full bg-purple text-white">
              1
            </p>
            <p>Upload Documents</p>
          </div>
          <div className="flex items-center gap-4 w-3/5 text-left font-black">
            <p className="w-8 h-8 flex items-center justify-center text-sm rounded-full bg-purple text-white">
              2
            </p>
            <p>Minion Bot Analyzes</p>
          </div>
          <div className="flex items-center gap-4 w-3/5 text-left font-black">
            <p className="w-8 h-8 flex items-center justify-center text-sm rounded-full bg-purple text-white">
              3
            </p>
            <p>Start Asking Questions</p>
          </div>
        </div>
        <video
          autoPlay
          src={video}
          muted
          controls
          loop
          className="w-1/2 p-4 ml-4 bg-white rounded-3xl"
        ></video>
      </div>
    </div>
  );
}

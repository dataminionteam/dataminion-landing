import container from "../assets/container.png";
import fingerprint from "../assets/fingerprint.png";
import lock from "../assets/lock.png";
import chart from "../assets/chart.png";
import animation from "../assets/animation.gif";

export default function Privacy() {
  return (
    <div className="h-screen p-4 box-border">
      <div className="flex flex-col md:flex-row justify-center gap-8 p-[10vw] bg-darkSlate rounded-3xl size-full box-border">
        <div className="flex flex-col justify-start items-start gap-4 w-auto h-1/3 md:h-auto md:w-1/3">
          <img src={animation} className="w-48 object-contain"></img>
          <p className="text-[48px] leading-[54px] text-white font-extrabold">
            Privacy and Security
          </p>
        </div>
        <div className="flex justify-start flex-wrap w-auto h-2/3 md:h-auto md:w-2/3">
          <div className="w-1/2 p-4 space-y-4">
            <img src={container} className="w-10 h-10"></img>
            <p className="text-white text-xl font-semibold">
              Customer data is stored in isolated containers.
            </p>
          </div>
          <div className="w-1/2 p-4 space-y-4">
            <img src={fingerprint} className="w-10 h-10"></img>
            <p className="text-white text-xl font-semibold">
              Customer data is encrypted at rest and in transit.
            </p>
          </div>
          <div className="w-1/2 p-4 space-y-4">
            <img src={lock} className="w-10 h-10"></img>
            <p className="text-white text-xl font-semibold">
              Customer data is never used for reasons other than servicing API
              calls.
            </p>
          </div>
          <div className="w-1/2 p-4 space-y-4">
            <img src={chart} className="w-10 h-10"></img>
            <p className="text-white text-xl font-semibold">
              DATAMINION only monitors operational metrics to support the health
              and performance of the system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

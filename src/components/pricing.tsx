import check from "../assets/green check.png";

export default function Pricing() {
  return (
    <div className="flex flex-col items-center w-full h-auto lg:h-screen gap-6 p-6">
      <div className="flex flex-col justify-center gap-8 w-[530px] max-w-full h-1/3 text-center">
        <p className="text-3xl md:text-5xl font-extrabold">Pricing & Plans</p>
        <p className="text-lg md:text-xl font-extrabold">
          The MINIONBOT is an operational Beta. It is functional. Please support
          our endeavor and try it out. Your patronage is highly appreciated.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 flex-1 w-full h-2/3">
        <a
          href="https://app.dataminion.ai"
          className="p-8 space-y-2 border border-lightSlate rounded-3xl transition-colors hover:bg-lightSlate"
        >
          <p className="text-3xl font-extrabold">Trial</p>
          <p className="text-lg mt-0">Just Getting Started</p>
          <p className="font-bold pb-8">Free</p>
          <hr className="text-lightSlate pt-8" />
          <div className="flex gap-2 items-start pb-1">
            <img src={check} className="w-6 h-6" />
            <p>5 Document Uploads</p>
          </div>
          <div className="flex gap-2 items-start pb-1">
            <img src={check} className="w-6 h-6" />
            <p>50MB Document Upload Size</p>
          </div>
          <div className="flex gap-2 items-start pb-1">
            <img src={check} className="w-6 h-6" />
            <p>20 Questions Total</p>
          </div>
        </a>
        <a
          href="https://app.dataminion.ai"
          className="p-8 space-y-2 border border-lightSlate rounded-3xl transition-colors hover:bg-lightSlate"
        >
          <p className="text-3xl font-extrabold">Premium</p>
          <p className="text-lg">Unlock All Features</p>
          <p className="font-bold pb-8">$9.99 / month</p>
          <hr className="text-lightSlate pt-8" />
          <div className="flex gap-2 items-start pb-1">
            <img src={check} className="w-6 h-6" />
            <p>20 Document Uploads</p>
          </div>
          <div className="flex gap-2 items-start pb-1">
            <img src={check} className="w-6 h-6" />
            <p>100MB Document Upload Size</p>
          </div>
          <div className="flex gap-2 items-start pb-1">
            <img src={check} className="w-6 h-6" />
            <p>40 Questions Total</p>
          </div>
        </a>
        <a
          href="https://app.dataminion.ai"
          className="p-8 space-y-2 border border-lightSlate rounded-3xl transition-colors hover:bg-lightSlate"
        >
          <p className="text-3xl font-extrabold">Professional</p>
          <p className="text-lg">For Power Users</p>
          <p className="font-bold pb-8">$24.99 / month</p>
          <hr className="text-lightSlate pt-8" />
          <div className="flex gap-2 items-start pb-1">
            <img src={check} className="w-6 h-6" />
            <p>40 Document Uploads</p>
          </div>
          <div className="flex gap-2 items-start pb-1">
            <img src={check} className="w-6 h-6" />
            <p>100MB Document Upload Size</p>
          </div>
          <div className="flex gap-2 items-start pb-1">
            <img src={check} className="w-6 h-6" />
            <p>1000 Questions Total</p>
          </div>
        </a>
        <a
          href="https://app.dataminion.ai"
          className="p-8 space-y-2 border border-lightSlate rounded-3xl transition-colors hover:bg-lightSlate"
        >
          <p className="text-3xl font-extrabold">Enterprise</p>
          <p className="text-lg">For your team</p>
          <p className="font-bold pb-8">Call Us For Pricing</p>
          <hr className="text-lightSlate pt-8" />
          <div className="flex gap-2 items-start pb-1">
            <img src={check} className="w-6 h-6" />
            <p>Uptime SLA</p>
          </div>
          <div className="flex gap-2 items-start pb-1">
            <img src={check} className="w-6 h-6" />
            <p>Enterprise Support</p>
          </div>
          <div className="flex gap-2 items-start pb-1">
            <img src={check} className="w-6 h-6" />
            <p>Multi Document Chat</p>
          </div>
        </a>
      </div>
    </div>
  );
}

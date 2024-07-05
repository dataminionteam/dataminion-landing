import check from "../assets/green check.png";

export default function Pricing() {
  return (
    <div className="flex flex-col items-center w-full h-screen gap-6 p-6">
      <div className="w-1/3 text-center">
        <p className="text-[60px] font-extrabold">Pricing & Plans</p>
        <p className="text-xl leading-[24px] font-extrabold">
          The MINIONBOT is an operational Beta. It is functional. Please support
          our endeavor and try it out. Your patronage is highly appreciated.
        </p>
      </div>
      <div className="flex gap-2 flex-1 w-full">
        <div className="w-1/4 h-full p-8 space-y-4 border border-slate rounded-3xl">
          <p className="text-[40px] font-extrabold">Trial</p>
          <p className="text-lg">Just getting started</p>
          <p className="font-bold">Free</p>
          <hr className="text-slate" />
          <div className="flex gap-4 items-center">
            <img src={check} className="w-6 h-6" />
            <p>5 Document Uploads</p>
          </div>
          <div className="flex gap-4 items-center">
            <img src={check} className="w-6 h-6" />
            <p>50MB Document Upload Size</p>
          </div>
          <div className="flex gap-4 items-center">
            <img src={check} className="w-6 h-6" />
            <p>20 Questions Total</p>
          </div>
        </div>
        <div className="w-1/4 h-full p-8 space-y-4 border border-slate rounded-3xl">
          <p className="text-[40px] font-extrabold">Premium</p>
          <p className="text-lg">Unlock All Features</p>
          <p className="font-bold">$9.99 / month</p>
          <hr className="text-slate" />
          <div className="flex gap-4 items-center">
            <img src={check} className="w-6 h-6" />
            <p>20 Document Uploads</p>
          </div>
          <div className="flex gap-4 items-center">
            <img src={check} className="w-6 h-6" />
            <p>100MB Document Upload Size</p>
          </div>
          <div className="flex gap-4 items-center">
            <img src={check} className="w-6 h-6" />
            <p>40 Questions Total</p>
          </div>
        </div>
        <div className="w-1/4 h-full p-8 space-y-4 border border-slate rounded-3xl">
          <p className="text-[40px] font-extrabold">Professional</p>
          <p className="text-lg">For Power Users</p>
          <p className="font-bold">$24.99 / month</p>
          <hr className="text-slate" />
          <div className="flex gap-4 items-center">
            <img src={check} className="w-6 h-6" />
            <p>40 Document Uploads</p>
          </div>
          <div className="flex gap-4 items-center">
            <img src={check} className="w-6 h-6" />
            <p>100MB Document Upload Size</p>
          </div>
          <div className="flex gap-4 items-center">
            <img src={check} className="w-6 h-6" />
            <p>1000 Questions Total</p>
          </div>
        </div>
        <div className="w-1/4 h-full p-8 space-y-4 border border-slate rounded-3xl">
          <p className="text-[40px] font-extrabold">Enterprise</p>
          <p className="text-lg">For your team</p>
          <p className="font-bold">Call Us for Pricing</p>
          <hr className="text-slate" />
          <div className="flex gap-4 items-center">
            <img src={check} className="w-6 h-6" />
            <p>Uptime SLA</p>
          </div>
          <div className="flex gap-4 items-center">
            <img src={check} className="w-6 h-6" />
            <p>Enterprise Support</p>
          </div>
          <div className="flex gap-4 items-center">
            <img src={check} className="w-6 h-6" />
            <p>Multi Document Chat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

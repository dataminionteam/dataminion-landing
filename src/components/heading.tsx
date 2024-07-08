import phone from "../assets/phone.png";

export default function Heading() {
  return (
    <div className="h-[calc(100vh-6rem)] p-6 box-border">
      <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-grayOverlay size-full box-border rounded-3xl">
        <img
          src={phone}
          className="w-auto h-1/2 md:h-full object-cover relative -left-[5vw]"
        />
        <div className="flex flex-col flex-1 justify-around h-full md:py-8 md:pl-16 text-white">
          <p className="text-lg md:text-[5vw] md:leading-[5vw] font-black">
            Engage directly with
            <br />
            your PDFs and
            <br />
            Word documents
          </p>
          <div className="space-y-4">
            <p className="text-3xl font-bold">Come join our beta release</p>
            <a
              href="https://app.dataminion.ai"
              className="inline-block w-fit px-12 py-3 bg-white text-purple text-lg rounded-md hover:text-white hover:bg-purple transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

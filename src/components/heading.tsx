export default function Heading() {
  return (
    <div className="h-[calc(100dvh-6rem)] p-6 box-border">
      <div className="flex flex-col md:flex-row-reverse items-center bg-grayOverlay size-full box-border rounded-3xl">
        <img
          src="/phone.png"
          className="w-auto h-1/2 md:h-full lg:h-[calc(100%+3rem)] object-cover relative -left-6"
        />
        <div className="flex flex-col flex-1 justify-around h-full p-8 pr-0 text-white">
          <p className="text-lg md:text-[6vw] md:leading-[6vw] font-black">
            Engage directly with your PDFs and Word documents
          </p>
          <div className="space-y-4">
            <p className="text-2xl font-bold">Come join our beta release</p>
            <a
              href="https://app.dataminion.ai"
              className="inline-block w-fit px-8 py-2 bg-white text-purple text-sm rounded-md hover:text-white hover:bg-purple transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

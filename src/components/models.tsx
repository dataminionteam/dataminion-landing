import modelA from "../assets/model-a.png";
import modelB from "../assets/model-b.png";
import modelC from "../assets/model-c.png";

export default function Models() {
  return (
    <div className="flex w-full h-[30vw] gap-2 p-6">
      <div className="flex flex-col justify-center items-center w-1/3 px-8 text-center bg-white rounded-3xl">
        <img src={modelA} className="w-48 object-cover" />
        <p className="text-xl font-extrabold">Upload Entire Textbooks</p>
        <p className="mt-2">DATAMINION supports file sizes up to 100 MB</p>
      </div>
      <div className="flex flex-col justify-center items-center w-1/3 px-8 text-center bg-white rounded-3xl">
        <img src={modelB} className="w-48 object-cover" />
        <p className="text-xl font-bold">Mobile Phone Support</p>
        <p className="mt-2">
          Access MINIONBOT on your mobile phone. Coming Soon.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-1/3 px-8 text-center bg-white rounded-3xl">
        <img src={modelC} className="w-48 object-cover" />
        <p className="text-xl font-bold">File Types</p>
        <p className="mt-2">
          We allow the upload and processing of PDFs and MS Word Documents.
          Support for other file types coming soon.
        </p>
      </div>
    </div>
  );
}

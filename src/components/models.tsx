import modelA from "../assets/model-a.png";
import modelB from "../assets/model-b.png";
import modelC from "../assets/model-c.png";

export default function Models() {
  return (
    <div className="flex flex-col md:flex-row items-center w-full h-auto md:h-[50vh] gap-2 p-6">
      <div className="flex flex-col h-full justify-center items-center w-2/3 md:w-1/3 md:px-8 text-center bg-white rounded-3xl">
        <img src={modelA} className="w-48 object-cover" />
        <p className="text-xl font-extrabold">Upload Entire Textbooks</p>
        <p className="mt-2">DATAMINION supports file sizes up to 100 MB</p>
      </div>
      <div className="flex flex-col h-full justify-center items-center w-2/3 md:w-1/3 md:px-8 text-center bg-white rounded-3xl">
        <img src={modelB} className="w-48 object-cover" />
        <p className="text-xl font-bold">Mobile Phone Support</p>
        <p className="mt-2">
          Access MINIONBOT on your mobile phone. Coming Soon.
        </p>
      </div>
      <div className="flex flex-col h-full justify-center items-center w-2/3 md:w-1/3 md:px-8 text-center bg-white rounded-3xl">
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

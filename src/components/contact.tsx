export default function Contact() {
  return (
    <form className="flex flex-col justify-center w-full h-[calc(100vh-5rem)] gap-4 p-6 pl-12 bg-lightSlate">
      <p className="text-3xl font-black">Get In Touch</p>
      <p className="w-[744px]">
        If you have questions, comments, or suggestions, please contact
        DATAMINION Customer Support by filling out the following fields.
      </p>
      <div className="flex gap-6">
        <div className="flex flex-col w-1/2 max-w-[360px]">
          <p className="py-2">First name</p>
          <input
            className="p-2 bg-white border border-slate rounded-md"
            placeholder="First name"
          ></input>
        </div>
        <div className="flex flex-col w-1/2 max-w-[360px]">
          <p className="py-2">Last name</p>
          <input
            className="p-2 bg-white border border-slate rounded-md"
            placeholder="Last name"
          ></input>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[744px]">
        <p className="py-2">Email *</p>
        <input
          className="p-2 bg-white border border-slate rounded-md"
          placeholder="Email"
        ></input>
      </div>
      <div className="flex flex-col w-full max-w-[744px]">
        <p className="py-2">Message *</p>
        <textarea
          className="p-2 bg-white border border-slate rounded-md"
          placeholder="Message"
        ></textarea>
      </div>
      <button className="h-12 w-1/2 max-w-[360px] text-center text-white bg-purple rounded-md">
        Submit
      </button>
    </form>
  );
}

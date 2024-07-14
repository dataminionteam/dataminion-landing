import { useRef, FormEvent, FormEventHandler } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form: any = useRef();

  const sendEmail: FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.EMAILJS_SERVICE,
        import.meta.env.EMAILJS_TEMPLATE,
        form.current,
        {
          publicKey: import.meta.env.EMAILJS_API_KEY,
        },
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center w-full h-[calc(100vh-5rem)] gap-4 p-6 pl-12 bg-lightSlate"
      >
        <p className="text-2xl sm:text-3xl font-black">Get In Touch</p>
        <p className="text-xs sm:text-base w-[744px] max-w-full">
          If you have questions, comments, or suggestions, please contact
          DATAMINION Customer Support by filling out the following fields.
        </p>
        <div className="flex flex-col w-full md:flex-row gap-2 md:gap-6">
          <div className="flex flex-col md:w-1/2 md:max-w-[360px]">
            <p className="py-2">First name</p>
            <input
              className="p-2 bg-white border border-slate rounded-md"
              placeholder="First name"
              type="text"
              name="first_name"
            ></input>
          </div>
          <div className="flex flex-col md:w-1/2 md:max-w-[360px]">
            <p className="py-2">Last name</p>
            <input
              className="p-2 bg-white border border-slate rounded-md"
              placeholder="Last name"
              type="text"
              name="last_name"
            ></input>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[744px]">
          <p className="py-2">Email *</p>
          <input
            className="p-2 bg-white border border-slate rounded-md"
            placeholder="Email"
            type="text"
            name="email"
            required
          ></input>
        </div>
        <div className="flex flex-col w-full max-w-[744px]">
          <p className="py-2">Message *</p>
          <textarea
            className="p-2 bg-white border border-slate rounded-md resize-none"
            placeholder="Message"
            rows={3}
            name="message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          value="Send"
          className="h-10 w-1/2 max-w-[360px] text-center text-white rounded-md bg-purple hover:bg-purpleDark transition-colors"
        >
          Submit
        </button>
      </form>
    </>
  );
}

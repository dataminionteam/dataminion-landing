export default function Footer() {
  return (
    <div className="flex flex-col items-center w-full h-[5rem] p-4">
      <p>Copyright © 2024 DATAMINION. All rights reserved.</p>
      <div className="flex justify-center gap-8">
        <a href="/tos" className="underline">
          End User Agreement
        </a>
        <a href="/faq" className="underline">
          FAQ
        </a>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const date = new Date();

  const linkToLinkedIn = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <footer className="flex items-center justify-center whitespace-nowra bottom-0 t-[100vh] font-bold text-xs sm:text-xl bg-slate-200 shadow-md w-ful p-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <p className="">Renthub</p>
        <p className="ml-3">
          All Rights Reserved. &copy; {date.getFullYear()}.
        </p>
        <div className="flex">
          <Link
            onClick={() =>
              linkToLinkedIn(
                "https://www.linkedin.com/in/sunday-ogunmakin-9877751b7/"
              )
            }
          >
            <p className="ml-3">
              Designed by{" "}
              <span className="text-blue-700 font-bold text-sm sm:text-xl hover:underline">
                Mankind
              </span>
              <span className="text-[#FFD700] font-bold text-sm sm:text-xl hover:underline">
                4dev
              </span>
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

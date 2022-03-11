import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 w-screen z-50 flex justify-center">
        <i
          className="fal fa-plus shadow-custom cursor-pointer  relative bottom-2 z-50"
          onClick={() => setOpen(!open)}
        ></i>

        <div
          className={
            "transition-all absolute bottom-8 bg-black md:border-red-500 md:border-2 md:border-b-0 h-12 width-menu md:h-12 tra 6 z-40 rounded-t-full flex justify-center items-end  " +
            (open ? "opacity-100 " : "opacity-0 -")
          }
        >
          <Link
            to="/"
            className="rounded-full bg-black    flex justify-center items-center w-8 h-8 absolute -translate-x-20 md:-translate-x-40"
          >
            <i className="fal fa-user"></i>
          </Link>
          <Link
            to="/surface"
            className="rounded-full bg-black    flex justify-center items-center w-8 h-8 absolute -translate-x-8 md:-translate-x-20"
          >
            <i className="fal fa-user"></i>
          </Link>
          <button className="rounded-full bg-black    flex justify-center items-center w-8 h-8 absolute translate-x-20 md:translate-x-40">
            <i className="fal fa-users"></i>
          </button>
          <button className="rounded-full bg-black    flex justify-center items-center w-8 h-8 absolute translate-x-8 md:translate-x-20">
            <i className="fal fa-users"></i>
          </button>
        </div>
      </div>
    </>
  );
}

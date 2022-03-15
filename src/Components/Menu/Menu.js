import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="fixed bottom-0 w-screen z-50 flex justify-center"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="button-circle w-12 h-12 relative bottom-2 z-50">
          <i className="fal fa-plus shadow-custom cursor-pointer"></i>
        </div>

        <div
          className={
            "transition-all absolute bottom-8   h-12 width-menu md:h-12 tra 6 z-40 rounded-t-full flex justify-center items-end  " +
            (open ? "opacity-100 " : "opacity-0")
          }
        >
          <Link
            to="/"
            className="rounded-full flex justify-center items-center w-8 h-8 absolute -translate-x-28 md:-translate-x-40"
          >
            <i className="fal fa-solar-system"></i>
          </Link>
          <Link
            to="/surface"
            className="rounded-full     flex justify-center items-center w-8 h-8 absolute -translate-x-16 md:-translate-x-20"
          >
            <i className="fal fa-location"></i>
          </Link>
          <button className="rounded-full     flex justify-center items-center w-8 h-8 absolute translate-x-28 md:translate-x-40">
            <i className="fal fa-users"></i>
          </button>
          <button className="rounded-full     flex justify-center items-center w-8 h-8 absolute translate-x-16 md:translate-x-20">
            <i className="fal fa-users"></i>
          </button>
        </div>
      </div>
    </>
  );
}

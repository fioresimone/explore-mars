import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="fixed bottom-4  w-screen z-50 flex justify-center items-center"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="button-circle w-10 h-10 relative  z-50">
          <i className="fal fa-plus shadow-custom cursor-pointer"></i>
        </div>

        <div
          className={
            "transition-all absolute   w-1/2 h-8  z-40 flex justify-center items-end  " +
            (open ? "opacity-100 " : "opacity-0")
          }
        >
          <Link
            to="/"
            className="w-8 h-8 absolute -translate-x-28 md:-translate-x-40 button-circle"
          >
            <i className="fal fa-solar-system"></i>
          </Link>
          <Link
            to="/surface"
            className="w-8 h-8 absolute -translate-x-16 md:-translate-x-20 button-circle"
          >
            <i className="fal fa-location"></i>
          </Link>

          <Link
            to="/orbiters/maven"
            className="w-8 h-8 absolute translate-x-16 md:translate-x-20 button-circle"
          >
            <i className="fal fa-solar-system"></i>
          </Link>
          <Link
            to="/spacecrafts/mer"
            className="w-8 h-8 absolute translate-x-28 md:translate-x-40 button-circle"
          >
            <i className="fal fa-solar-system"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

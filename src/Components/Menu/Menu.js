import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="absolute bottom-0 w-screen z-50 flex justify-center">
        <i
          className="fal fa-plus shadow-custom cursor-pointer  relative bottom-5 z-50"
          onClick={() => setOpen(!open)}
        ></i>

        <div
          className={
            "transition-all absolute bottom-8 border-red-500 border-2 border-b-0 h-24 w-44 md:h-28 tra md:w-60 z-40 rounded-t-full  justify-center items-end  " +
            (open ? "flex" : "hidden")
          }
        >
          <button className="rounded-full bg-black border  border-white flex justify-center items-center w-8 h-8 absolute -translate-x-16 md:-translate-x-24 -translate-y-2">
            <i className="fal fa-user"></i>
          </button>
          <button className="rounded-full bg-black border  border-white flex justify-center items-center w-8 h-8 absolute translate-x-16 md:translate-x-24 -translate-y-2">
            <i className="fal fa-users"></i>
          </button>
        </div>
      </div>
    </>
  );
}

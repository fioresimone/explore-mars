import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Menu1() {
  const [open, setOpen] = useState(false);

  let navigation = useNavigate();

  const nav = (page) => {
    navigation(page);
    setOpen(false);
  };

  return (
    <>
      <div
        className={
          "transition-all bg-red-900/50 border border-orange-700 absolute rounded-full  overflow-hidden  z-50 flex justify-center items-center " +
          (open ? "w-52 h-52 " : "w-0 h-0")
        }
        style={{
          left: `${open ? "calc(50% - 6.5rem)" : "50%"}`,
          top: `${open ? "calc(50% - 6.5rem)" : "50%"}`,
        }}
      >
        <div
          onClick={() => nav("/")}
          className={
            "absolute border border-white rounded-full duration-300 w-8 h-8 flex justify-center items-center -translate-y-20 -translate-x-7"
          }
        >
          <i className="fal fa-hexagon"></i>
        </div>

        <div
          onClick={() => nav("surface")}
          className={
            "absolute border border-white rounded-full duration-300 w-8 h-8 flex justify-center items-center translate-x-20 -translate-y-8"
          }
        >
          <i className="fal fa-hexagon"></i>
        </div>
      </div>

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

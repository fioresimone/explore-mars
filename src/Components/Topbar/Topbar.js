import classes from "./Topbar.module.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <>
      <div
        className={
          "w-screen h-8 absolute flex items-center z-50  justify-around " +
          classes.topbar
        }
      >
        <div className={classes.leftBlockTop}></div>
        <div className={classes.rightBlockTop}></div>

        <Link to="/" className="text-xs">
          home
        </Link>

        <Link to="/" className="text-xs">
          home
        </Link>

        <Link to="/" className="text-xs">
          home
        </Link>
      </div>
      <div
        className={
          "w-screen h-8 fixed bottom-0 flex items-center z-50  justify-between  " +
          classes.bottombar
        }
      >
        <div className={classes.leftBlockBottom}></div>
        <div className={classes.rightBlockBottom}></div>
      </div>{" "}
    </>
  );
}

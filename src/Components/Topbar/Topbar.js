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
        <div className={classes.leftBlockTop}>
          <div className={classes.leftBlockTopShadow}></div>
        </div>
        <div className={classes.rightBlockTop}>
          <div className={classes.rightBlockTopShadow}></div>
        </div>

        <Link to="/" className="text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
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
        <div className={classes.leftBlockBottom}>
          <div className={classes.leftBlockBottomShadow}></div>
        </div>
        <div className={classes.rightBlockBottom}>
          <div className={classes.rightBlockBottomShadow}></div>
        </div>
      </div>{" "}
    </>
  );
}

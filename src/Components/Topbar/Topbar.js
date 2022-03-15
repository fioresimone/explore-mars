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
      </div>

      {/* <div className="w-screen h-8 fixed -bottom-4 flex items-center z-50  justify-between hidden">
        <div className={classes.bottombarLeft}></div>
        <div className={classes.bottombarRight}></div>
        <div className={classes.leftBlockBottom}>
          <div className={classes.leftBlockBottomShadow}></div>
        </div>

        <div className={classes.rightBlockBottom}>
          <div className={classes.rightBlockBottomShadow}></div>
        </div>
      </div> */}
    </>
  );
}

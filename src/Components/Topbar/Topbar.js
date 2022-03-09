import classes from "./Topbar.module.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <>
      <div
        className={
          "w-screen h-8 absolute flex items-center z-50  justify-between " +
          classes.topbar
        }
      >
        <div className={classes.leftBlockTop}></div>
        <div className={classes.rightBlockTop}></div>

        {/* <div className="w-50">
        <Link to="/" className={classes.btn + " mx-4"}>
          <i className="fal fa-solar-system text-white "></i>
        </Link>
        <Link to="/station" className={classes.btn + " mx-4"}>
          <i className="fal fa-space-station-moon-alt text-white"></i>
        </Link>
        <Link to="/surface" className={classes.btn + " mx-4"}>
          <i className="fal fa-hexagon text-white "></i>
        </Link>
        
        <Link to="/spacecrafts/voyager" className={classes.btn + " mx-4"}>
          <i className="fal fa-starship text-white "></i>
        </Link>
        
      </div> */}
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

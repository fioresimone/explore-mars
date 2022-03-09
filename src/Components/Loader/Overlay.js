import classes from "./Overlay.module.css";

export default function Overlay({ progress }) {
  console.log(progress);
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black z-50 flex justify-center items-center">
      <div className={classes.wrapper}>
        <p className="text-white absolute text-xs text-center">
          {progress < 25
            ? "Loading terrains"
            : progress < 50
            ? "Hiding martians"
            : progress < 75
            ? "Searching Dr. Manhattan"
            : "Locating Matt Damon"}
        </p>
        <div className={classes.planet}>
          <div className={classes.moon}></div>
        </div>
      </div>
    </div>
  );
}

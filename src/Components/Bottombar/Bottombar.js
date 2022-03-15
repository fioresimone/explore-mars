import classes from "./Bottombar.module.css";

export default function Bottombar() {
  return (
    <div
      className={
        "w-screen h-8 absolute -bottom-8 flex items-center z-50  justify-around " +
        classes.topbar
      }
    >
      <div className={classes.leftBlockBottom}>
        <div className={classes.leftBlockBottomShadow}></div>
      </div>
      <div className={classes.rightBlockBottom}>
        <div className={classes.rightBlockBottomShadow}></div>
      </div>
    </div>
  );
}

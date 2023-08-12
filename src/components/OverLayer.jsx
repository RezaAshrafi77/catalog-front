import React from "react";

export const OverLayer = ({ classNames, events, children, ...props }) => {
  return (
    <div
      className={`${classNames} cursor-pointer overflow-hidden flex justify-center z-20 w-screen pt-[10vh]  h-full fixed top-0 right-0 bg-opacity-80 bg-backgroundText`}
      onClick={(e) => events["onExit"](e)}
    >
      {children}
      <div className="fixed top-0 left-0 z-30 backdrop-filter backdrop-blur-sm h-full w-full"></div>
    </div>
  );
};

export default OverLayer;

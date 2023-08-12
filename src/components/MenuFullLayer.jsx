import React from "react";

export default function MenuOverLayer({
  classNames,
  events,
  data,
  ...props
}) {
  return (
    <div
      className={`${classNames} flex cursor-pointer flex-col justify-center items-center h-screen w-screen fixed z-[60] top-0 left-0 bg-transparent`}
      onClick={(e) => events["onClick"](e)}
    ></div>
  );
}

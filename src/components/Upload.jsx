import React from "react";

export default function Upload({ data, classNames, events, ...props }) {
  return (
    <div
      className={
        classNames +
        " " +
        "flex justify-center items-center min-w-[30vw] w-[30vw] min-h-[30vw] h-[30vw] rounded-full bg-info"
      }
    >
      {props?.icon}
    </div>
  );
}

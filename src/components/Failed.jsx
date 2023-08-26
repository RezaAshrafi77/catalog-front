import React from "react";

export default function Failed({ data, classNames, events, ...props }) {
  return (
    <div
      className={`${classNames} flex flex-col items-center justify-center flex-1 px-[6vw]`}
    >
      {props?.icon}
      {props?.title ? (
        <strong className="text-[2.5vh] font-bold text-center mb-[1.5vh]">
          {props?.title}
        </strong>
      ) : null}
      {props?.subtitle ? (
        <p className="text-lg text-center font-normal mb-[6vh]">
          {props?.subtitle}
        </p>
      ) : null}
      {props?.button}
    </div>
  );
}

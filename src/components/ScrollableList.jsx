import React from "react";
import { Link } from "react-router-dom";

export default function ScrollableList({ classNames, data, events, ...props }) {
  return (
    <div
      className={`${classNames} flex flex-col gap-[1vh] px-[6vw]`}
    >
      {props?.title || props?.more ? (
        <div className="flex w-full justify-between pt-[4vh]">
          {props?.title ? (
            <strong className="text-backgroundText text-base font-medium">
              {props?.title}
            </strong>
          ) : (
            <div></div>
          )}
          {props?.more?.title ? (
            <Link
              className={`text-[#FA4A0C] text-sm font-medium`}
              to={props?.more?.link}
            >
              {props?.more?.title}
            </Link>
          ) : null}
        </div>
      ) : null}

      <div
        className={`flex flex-1 pt-[2vh] ${
          props?.orientation === "vertical"
            ? "flex-col gap-4"
            : "gap-[6vw] overflow-x-scroll no-scrollbar"
        } w-full pb-[2vh]`}
      >
        {props?.render}
      </div>
    </div>
  );
}

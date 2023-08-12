import React from "react";

import { Button } from "./index";

export default function Dialog({ classNames, events, data, ...props }) {
  return props?.open ? (
    <React.Fragment>
      <div
        onClick={() => events["onClose"]()}
        className="z-40 w-full h-full fixed right-0 top-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm backdrop-invert-0"
      ></div>
      <div className="z-50 w-2/3 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl overflow-hidden bg-white border border-borderColor shadow-md">
        <b className="p-[4vw] block font-medium w-full ">
          {props?.title}
        </b>
        <div className="flex flex-col gap-[4vh] w-full p-[4vw]">
          {props?.description ? (
            <p className="text-base text-backgroundText">
              {props?.description}
            </p>
          ) : null}
          <div className="flex items-center justify-between">
            {props?.confirm}

            {props?.cancel}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) : null;
}

import { useEffect } from "react";
import { homeData } from "./data";

export default function FurnitureIntro({}) {
  return (
    <div className="fnt-wrapper">
      {homeData?.title ? (
        <div className="w-full flex flex-col items-center px-6 gap-4 text-2xl">
          <h1 className="font-bold">Place of the Title</h1>
          <h1 className="font-bold">Place of the Title</h1>
        </div>
      ) : null}
      {homeData?.description ? (
        <div className="w-full flex flex-col mt-5 items-center gap-4 px-6 text-sm">
          <p className="font-bold">
            Place of the Description Place of the Description
          </p>
          <p className="font-bold">
            Place of the Description Place of the Description
          </p>
          <p className="font-bold">
            Place of the Description Place of the Description
          </p>
        </div>
      ) : null}
      {homeData?.joinButton ? (
        <div className="min-w-[40vw] min-h-20 py-3 mt-[6vh] bg-gray-500 text-white rounded-md text-center">Button</div>
      ) : null}
      {homeData?.benefits ? (
        <div className="w-full flex flex-wrap mt-[10vh] justify-between px-6 gap-5">
          {[true, true, true, true, true, true]?.map((item, index) => (
            <div
              className="w-[40vw] h-[40vw] bg-gray-500 rounded-md"
              key={"benefits" + index}
            ></div>
          ))}
        </div>
      ) : null}
      {homeData?.samples ? (
        <div className="w-full flex flex-col mt-[10vh] justify-between px-6 gap-8">
          {[true, true, true]?.map((item, index) => (
            <div
              className="w-full h-[120vw] bg-gray-500 rounded-md"
              key={"benefits" + index}
            ></div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
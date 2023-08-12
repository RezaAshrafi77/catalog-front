import React from "react";

import { Image } from ".";

export default function ListTile({ data, classNames, events, ...props }) {
  const [swipeLength, setSwipeLength] = React.useState(0);
  const [x1, setX1] = React.useState(0);

  const handleSwipe = (step, e) => {
    const x2 = e.changedTouches[0]?.clientX;
    const width = window.innerWidth;
    if (step === "start") {
      setX1(x2);
    }
    if (step === "move") {
      if (x2 - x1 > 20) {
        setSwipeLength(0);
      } else if (x1 - x2 > 20) {
        setSwipeLength((-1 * width) / 2.7);
      }
    }
    if (step === "end") {
      if (x2 - x1 > 20) {
        setSwipeLength(0);
      } else if (x1 - x2 > 20) {
        setSwipeLength((-1 * width) / 2.7);
      }
    }
  };
  return (
    <li
      className={`${classNames} flex items-center transition-all justify-between relative rounded-xl shadow-md p-[4vw] border border-borderColor`}
      onClick={() => events["onClick"]()}
      onTouchStart={(e) => handleSwipe("start", e)}
      onTouchMove={(e) => handleSwipe("move", e)}
      onTouchEnd={(e) => handleSwipe("end", e)}
      style={{
        transform: `translateX(${swipeLength}px)`,
      }}
    >
      {props?.swipeItems?.length ? (
        <div className="flex items-center px-[2vw] gap-[4vw] absolute right-0 top-1/2 -translate-y-1/2 translate-x-[120%]">
          {props?.swipeItems?.map((item, index) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}
        </div>
      ) : null}
      <div className="flex gap-[3vw] items-center">
        {props?.rightSideCounter}
        {props?.leading || (
          <Image
            src="https://api.qbar.ir/static/media/food/picture_thumbnail/1676378362.jpg"
            classNames="h-[10vh] w-[10vh] rounded-xl"
          />
        )}
        <div className="flex flex-col gap-[1vh]">
          {props?.title ? (
            <strong className="text-backgroundText font-medium text-[4.2vw]">
              {props?.title}
            </strong>
          ) : null}
          {props?.subtitle ? (
            <strong className="text-[3.7vw] font-medium">
              {props?.subtitle}
            </strong>
          ) : null}
        </div>
      </div>
      {props?.trailing}
    </li>
  );
}

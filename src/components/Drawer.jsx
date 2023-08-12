import React from "react";

export default function Drawer({ classNames, data, events, ...props }) {
  // const [swipeLength, setSwipeLength] = React.useState(0);
  const [x1, setX1] = React.useState(0);
  const [y1, setY1] = React.useState(0);

  const left = props?.direction === "left";
  const right = props?.direction === "right";
  const bottom = props?.direction === "bottom";
  const top = props?.direction === "top";
  const transform = () => {
    if (bottom) {
      return "translate-y-full";
    }
    if (right) {
      return "translate-x-full";
    }
    if (left) {
      return "-translate-x-full";
    }
  };
  const className = `overflow-hidden fixed z-50 transition-all duration-500 ${classNames} ${
    bottom ? "bottom-0" : "top-0"
  } ${props?.open ? "" : transform()} w-full flex ${
    bottom ? "items-end" : ""
  } ${left ? "justify-end" : ""} right-0 h-full`;

  const handleSwipe = (step, e) => {
    const x2 = e.changedTouches[0]?.clientX;
    const y2 = e.changedTouches[0]?.clientY;
    if (step === "start") {
      setX1(x2);
      setY1(y2);
    }
    if (step === "move") {
      if (right) {
        if (x2 - x1 > 20) {
          events["onClose"]();
        }
      } else if (left) {
        if (x1 - x2 > 20) {
          events["onClose"]();
        }
      } else if (top) {
        if (y1 - y2 > 20) {
          events["onClose"]();
        }
      } else if (bottom) {
        if (y2 - y1 > 20) {
          events["onClose"]();
        }
      }
    }
    if (step === "end") {
      if (right) {
        if (x2 - x1 > 20) {
          events["onClose"]();
        }
      } else if (left) {
        if (x1 - x2 > 20) {
          events["onClose"]();
        }
      } else if (top) {
        if (y1 - y2 > 20) {
          events["onClose"]();
        }
      } else if (bottom) {
        if (y2 - y1 > 20) {
          events["onClose"]();
        }
      }
    }
  };

  return (
    <React.Fragment>
      {props?.open ? (
        <div className="z-[100] w-full h-full fixed right-0 top-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm backdrop-invert-0"></div>
      ) : null}
      <div
        className={className + ' ' + 'z-[1000]'}
        onClick={() => events["onClose"]()}
        onTouchStart={(e) => handleSwipe("start", e)}
        onTouchMove={(e) => handleSwipe("move", e)}
        onTouchEnd={(e) => handleSwipe("end", e)}
      >
        <div
          className={`flex`}
          style={{
            height: bottom || top ? props?.size : "100%",
            width: right || left ? props?.size : "100%",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {props?.children}
        </div>
      </div>
    </React.Fragment>
  );
}

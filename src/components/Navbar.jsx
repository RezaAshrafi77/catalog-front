import React from "react";

export default function Navbar({ data, events, classNames, ...props }) {
  return (
    <nav
      className={`${classNames} sticky top-0 w-full min-h-[70px] z-30 px-[6vw]`}
    >
      <div className="relative w-full flex justify-between h-full items-center">
        {props?.leading}
        {props?.searchField}
        {props?.title ? (
          <strong className="absolute-center-center text-base font-medium absolute-center-center">
            {props?.title}
          </strong>
        ) : null}
        {props?.logo ? (
          <div className="absolute-center-center">{props?.logo}</div>
        ) : null}
        {props?.actions?.length ? (
          <div className="flex items-center gap-3">
            {props?.actions?.map((action, index) => (
              <React.Fragment key={index}>{action}</React.Fragment>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}

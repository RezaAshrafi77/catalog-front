import React from "react";
import { MdOutlineImage } from "react-icons/md";

export default function Image({ data, classNames, events, ...props }) {
  return props?.src ? (
    <img
      onClick={() => events && events["onClick"]()}
      className={classNames}
      src={props?.src}
      alt={props?.alt || "عکس"}
      style={props.style}
      loading="lazy"
      ref={props?.refs}
    />
  ) : (
    <div
      className={
        classNames + " " + "flex justify-center items-center bg-borderColor"
      }
      onClick={() => events["onClick"]()}
    >
      {props?.icon ? props?.icon : <MdOutlineImage size="50%" color="#777" />}
    </div>
  );
}

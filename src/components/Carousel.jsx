import React from "react";

export default function Carousel({ classNames, render, ...props }) {
  return (
    <div
      onTouchStart={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      onTouchEnd={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      className={`${classNames} flex overflow-hidden`}
    >
      {render}
    </div>
  );
}

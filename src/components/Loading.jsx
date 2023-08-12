import React from "react";

export default function Loading({ type = "dot-pulse" }) {
  return <div className={type}></div>;
}

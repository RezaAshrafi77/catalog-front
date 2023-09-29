import React from "react";
import V1 from "./v1";
import V2 from "./v2";

export default function Appliance({ designNumber = "1" }) {
  const appliances = {
    1: <V1 />,
    2: <V2 />,
  };
  return appliances[designNumber || "1"];
}
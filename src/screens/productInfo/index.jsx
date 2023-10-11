import React from "react";

import { Furniture } from "./index";

export default function ProductInfo({ position = "furniture" }) {
  const positions = {
    // appliance: <Appliance />,
    // food: <Food />,
    furniture: <Furniture />,
    // mobile: <Mobile />,
    // wear: <Wear />,
    // laptop: <Laptop />,
  };
  return positions[position];
}

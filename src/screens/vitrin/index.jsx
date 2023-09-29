import React from "react";

import { Furniture, Appliance } from "./index";

export default function Vitrin({ position = "furniture" }) {
  const positions = {
    appliance: <Appliance />,
    // food: <Food />,
    furniture: <Furniture />,
    // mobile: <Mobile />,
    // wear: <Wear />,
    // laptop: <Laptop />,
  };
  return positions[position];
}

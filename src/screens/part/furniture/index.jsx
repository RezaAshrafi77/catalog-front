import React from "react";

import P1 from "./p1";
import P2 from "./p2";

export default function Furniture({ designNumber = "v1" }) {
  const furnitures = {
    v1: <P1 />,
    v2: <P2 />,
  };
  return furnitures[designNumber];
}
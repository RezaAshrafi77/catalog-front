import React from "react";

import V1 from "./v1";
import V2 from "./v2";

export default function Furniture({ designNumber = "v1" }) {
  const furnitures = {
    v1: <V1 />,
    v2: <V2 />,
  };
  return furnitures[designNumber];
}
import React from "react";

import V1 from "./v1";

export default function Food({ designNumber = 1, ...props }) {
  const templates = {
    1: <V1 />,
  };
  return templates[designNumber];
}

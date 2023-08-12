import React from "react";

import Portrait from "./portrait";
import Rectangle from "./rectangle";
import Square from "./square";
import  WithText from "./withText";

export default function Product(props) {
  const components = {
    portrait: <Portrait {...props} />,
    rectangle: <Rectangle {...props} />,
    square: <Square {...props} />,
    withText: <WithText {...props} />,
  };
  return components[props?.style];
}

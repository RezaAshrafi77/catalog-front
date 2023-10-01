import React from "react";

import Portrait from "./portrait";
import Rectangle from "./rectangle";
import WithTag from "./withTag";
import  WithText from "./withText";

export default function Product(props) {
  const components = {
    portrait: <Portrait {...props} />,
    rectangle: <Rectangle {...props} />,
    withTag: <WithTag {...props} />,
    withText: <WithText {...props} />,
  };
  return components[props?.style];
}

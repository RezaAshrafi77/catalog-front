import React from "react";

import Sofa from "./sofa";

export default function Product(props) {
  const components = {
    sofa: <Sofa {...props} />,
  };
  return components[props?.style];
}

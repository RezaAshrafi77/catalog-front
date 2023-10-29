import V1 from "./1.jsx";

export default function Food(props) {
  const components = {
    1: <V1 {...props} />,
  };
  return components[props?.index];
}

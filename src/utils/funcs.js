export const separate = (number) => {
  number += "";
  number = number.replace(",", "");
  let x = number.split(".");
  let y = x[0];
  let z = x.length > 1 ? "." + x[1] : "";
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
  return y + z + " " + "تومان";
};

export const checkDevice = () => {
  let width = window.innerWidth;
  if (width > 1024) {
    return "desktop";
  } else if (width > 600) {
    return "tablet";
  } else {
    return "mobile";
  }
};

export default null;

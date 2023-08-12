import proxy from "~/redux/proxy";
const map = {
  setDrawJSON:
    (data = {}) =>
    (dispatch) =>
      // console.log(data),
      dispatch({ type: "map/setDrawJSON", data }),
  setMap:
    (data = {}) =>
    (dispatch) =>
      dispatch({ type: "map/setMap", data }),
};

export default map;

import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  map: {
    flyTo: [null, null],
    fitBounds: null,
  },
  drawJSON: null,
};
export default function map(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case "map/setDrawJSON":
      return { ...state, drawJSON: data };
    case "map/setMap":
      return { ...state, map: data };
    case "map/loading":
      return { ...state, loading: true };
    case "map/error":
      toast.error(data.message);
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}

import proxy from "~/redux/proxy";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  info: null,
};

export default function craft(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case "layout/info":
      return { ...state, loading: false, error: null, info: data };
    case "layout/loading":
      return { ...state, loading: true };
    case "layout/error":
      toast.error(data.message);
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}

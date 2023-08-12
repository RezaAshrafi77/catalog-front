import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  list: [],
};
export default function transport(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case "transport/list":
      return {
        ...state,
        loading: false,
        list: data,
        error: null,
      };
    case "transport/info":
      return { ...state, loading: false, error: null};
    case "transport/loading":
      return { ...state, loading: true };
    case "transport/error":
      toast.error(data.message);
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}

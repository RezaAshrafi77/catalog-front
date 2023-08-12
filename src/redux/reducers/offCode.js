
import { toast } from "react-toastify";
const initialState = {
  loading: false,
  error: null,
  info: null,
  list:[],
};
export default function offCode(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case "offCode/list":
      return {
        ...state,
        loading: false,
        list: data,
        error: null,
      };
    /////////////
    // case "qr/loading":
    //   return { ...state, loading: true };
    // case "qr/error":
    //   toast.error(data.message);
    //   return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}
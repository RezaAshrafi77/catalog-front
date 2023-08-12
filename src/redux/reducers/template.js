import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  template: null,
};

export default function template(state = initialState, action) {
  let { type, data, params } = action;
  switch (type) {
    case "/":
      return { ...state, template: data, loading: false, error: null };
    case "template/loading":
      return { ...state, loading: true };
    case "template/error":
      toast.error(data?.message);
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}

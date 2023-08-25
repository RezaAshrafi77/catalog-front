import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
};

export default function file(state = initialState, action) {
  let { type, data, params } = action;
  switch (type) {
    case "files/loading":
      return { ...state, loading: true, progress: 0 };
    case "file/error":
      toast.error(data?.message);
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}

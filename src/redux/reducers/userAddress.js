import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  list: [],
  info: null,
};

export default function userAddress(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case "userAddress/list":
      return {
        ...state,
        loading: false,
        list: data,
        error: null,
      };
    case "userAddress/info":
      return { ...state, loading: false, info: data, error: null };
    case "userAddress/update":
      return { ...state, loading: false, error: null };
    case "userAddress/add":
      toast.success("آدرس با موفقیت ثبت شد");
      return { ...state, loading: false, error: null, sum: data.payPrice };
    case "userAddress/delete":
      return { ...state, loading: false, error: null };
    case "userAddress/loading":
      return { ...state, loading: true };
    case "userAddress/error":
      toast.error(data.message);
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}

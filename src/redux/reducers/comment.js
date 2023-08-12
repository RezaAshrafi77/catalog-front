import proxy from "~/redux/proxy";
import { toast } from "react-toastify";
const status = proxy.status();
const initialState = {
  status,
  loading: false,
  error: null,
  list: [],
  schema: [],
};

export default function comment(state = initialState, action) {
  let { type, data, schema, count, params } = action;
  switch (type) {
    case "comment/list":
      return {
        ...state,
        loading: false,
        error: null,
        list: data,
        schema: schema,
        count,
        pageCount: +Math.floor((count - 1) / params.pageSize) + 1,
      };
    case "comment/add":
      return { ...state, loading: false, error: null };
    case "comment/delete":
      return { ...state, loading: false, error: null };
    case "comment/loading":
      return { ...state, loading: true };
    case "comment/error":
      toast.error(data.message);
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}

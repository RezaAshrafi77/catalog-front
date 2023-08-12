import proxy from "~/redux/proxy";
import { toast } from "react-toastify";
const status = proxy.status();
const initialState = {
  status,
  loading: false,
  error: null,
  list: [],
  schema: [],
  excelData: [],
  similarList : [],
};

export default function product(state = initialState, action) {
  let { type, data, schema, count, params } = action;
  switch (type) {
    case "product/similar":
      return { ...state, loading: false, similarList: data, error: null };
    case "product/list":
      if (params.excelData)
        return {
          ...state,
          loading: false,
          error: null,
          schema: schema,
          excelData: data,
        };
      return {
        ...state,
        loading: false,
        error: null,
        list: data,
        schema: schema,
        count,
        pageCount: +Math.floor((count - 1) / params.pageSize) + 1,
      };
    case "user/clearExcelData": {
      return {
        ...state,
        loading: false,
        excelData: null,
      };
    }
    case "product/add":
      return { ...state, loading: false, error: null };
    case "product/delete":
      return { ...state, loading: false, error: null };
    case "product/loading":
      return { ...state, loading: true };
    case "product/error":
      toast.error(data.message);
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}

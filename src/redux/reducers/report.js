import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  list: [],
  clients: [],
  gradeSoldList: [],
  productSoldList: [],
  codeSoldList: [],
  bookSoldCount: [],
  dashboard: {},
  contentDashboard:null
};
export default function report(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case "report/product/dashboard":
      return { ...state, loading: false, dashboard: data };
    case "report/content/dashboard":
      return { ...state, loading: false, contentDashboard: data };
    case "report/productType/sold/count":
      return { ...state, loading: false, list: data, error: null };
    case "report/grade/sold/count":
      return { ...state, loading: false, gradeSoldList: data, error: null };
    case "report/book/sold/count":
      return { ...state, loading: false, bookSoldCount: data, error: null };
    case "report/clients":
      return { ...state, loading: false, clients: data, error: null };
    case "report/loading":
      return { ...state, loading: true };
    case "report/error":
      // toast.error(data.message);
      return { ...state, loading: false, error: data.message };
    case "report/product/total/sold":
      return { ...state, loading: false, productSoldList: data, error: null };
    case "report/code/total/sold":
      return { ...state, loading: false, codeSoldList: data, error: null };
    default:
      return state;
  }
}

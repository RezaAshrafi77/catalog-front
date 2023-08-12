import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  list: [],
  info: null,
  adminList:[],
};

export default function menu(state = initialState, action) {
  let { type, data , schema, count, params } = action;
  switch (type) {
    case "menu/list":
      if (params.excelData)
        return {
          ...state,
          loading: false,
          error: null,
          schema: schema,
          excelData: data,
        };
      data = data.map((e) => ({
        ...e,
        title: e.description,
        link: e.name,
        iconly: e.icon && e.icon.includes("/") ? undefined : e.icon,
        icon: e.icon && e.icon.includes("/") ? e.icon : undefined,
      }));
      return {
        ...state,
        loading: false,
        error: null,
        list: data,
        schema: schema,
        count,
        pageCount: +Math.floor((count - 1) / params.pageSize) + 1,
      };
    case "menu/admin/list":
      if (params.excelData)
        return {
          ...state,
          loading: false,
          error: null,
          schema: schema,
          excelData: data,
        };
      data = data.map((e) => ({
        ...e,
        title: e.description,
        link: e.name,
        iconly: e.icon && e.icon.includes("/") ? undefined : e.icon,
        icon: e.icon && e.icon.includes("/") ? e.icon : undefined,
      }));
      return {
        ...state,
        loading: false,
        error: null,
        adminList: data,
        schema: schema,
        count,
        pageCount: +Math.floor((count - 1) / params.pageSize) + 1,
      };
    case "menu/info":
      return { ...state, loading: false, error: null, info: data };
    case "menu/add":
      return { ...state, loading: false, error: null };
    case "menu/homePage":
      return { ...state, loading: false, error: null, list: data.list };
    case "menu/delete":
      return { ...state, loading: false, error: null };
    case "menu/update":
      return { ...state, loading: false, error: null };
    case "menu/loading":
      return { ...state, loading: true };
    case "menu/error":
      toast.error(data?.message);
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}

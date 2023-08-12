import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  list: [],
  info: null,
  adminList: [],
  hiddenCols: ["pid", "ord"],
};

export default function menu(state = initialState, action) {
  let { type, data, schema, count, params } = action;
  params = params || {};
  switch (type) {
    case "admin/roleFunction":
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
        schema: schema.filter((e) => !state.hiddenCols.includes(e.name)),
        count,
        pageCount: +Math.floor((count - 1) / params.pageSize) + 1,
      };

    case "admin/roleFunction/" + params.id:
      return { ...state, loading: false, error: null, info: data };
    case "admin/roleFunction/add":
      toast.success(data?.message);
      return { ...state, loading: false, error: null };
    case "admin/roleFunction/delete/" + params.id:
      toast.success(data?.message);
      return { ...state, loading: false, error: null };
    case "admin/roleFunction/update/" + params.id:
      toast.success(data?.message);
      return { ...state, loading: false, error: null };
    case "admin/roleFunction/loading":
      return { ...state, loading: true };
    case "admin/roleFunction/error":
      toast.error(data?.message);
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}

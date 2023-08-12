import proxy from "~/redux/proxy";
import { toast } from "react-toastify";
const status = proxy.status();
const initialState = {
  status,
  loading: false,
  error: null,
  profileStatus: false,
  profileFields: {},
  info: {},
  list: [],
  schema: [],
  ActiveRoleId: +window.localStorage.getItem("activeRoleId"),
  userRoles: status.userRoles || [],
  roleId: null,
  excelData: [],
};

export default function user(state = initialState, action) {
  let { type, data, schema, count, params } = action;
  switch (type) {
    case "user/login":
    case "user/otp/login":
    case "user/otp/register":
    case "user/otp/sameh/login":
    case "user/switchRole":
      return {
        ...state,
        loading: false,
        status: data,
        userRoles: data.userRoles,
        roleId: data.roleId,
        userRoleId: data.userRoleId,
        error: null,
        ActiveRoleId:
          state.ActiveRoleId ||
          (data.userRoles.length > 1 ? state : data.userRoleId),
      };
    case "user/register":

    case "public/sendOTP":
      return { ...state, loading: false, status: data.profile, error: null };
    case "user/logout":
      return {
        ...state,
        loading: false,
        status: proxy.status(),
        error: null,
        ActiveRoleId: null,
      };
    case "user/getProfile":
      localStorage.setItem("userData", JSON.stringify(data));
      return {
        ...state,
        loading: false,
        status: data,
        error: null,
        setDone: false,
      };
    case "user/setActiveRoleId":
      window.localStorage.setItem("activeRoleId", String(data));
      return { ...state, loading: false, ActiveRoleId: data };
    case "user/setProfile":
      toast.success("تغییرات اعمال شد.");
      return { ...state, loading: false, error: null, setDone: true };
    case "user/getUserRole":
      return { ...state, loading: false, userRoles: data, error: null };
    case "user/list":
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
        count: count,
        pageCount: +Math.floor((count - 1) / params.pageSize) + 1,
      };
    case "user/clearExcelData": {
      return {
        ...state,
        loading: false,
        excelData: null,
      };
    }
    case "user/add":
      toast.success("با موفقیت ثبت شد");
      return { ...state, loading: false, error: null };
    case "user/update":
      toast.success("تغییرات اعمال شد.");
      return { ...state, loading: false, error: null };
    case "user/info":
      return { ...state, loading: false, error: null, info: data };
    case "user/delete":
      return { ...state, loading: false, error: null };
    case "user/loading":
      return { ...state, loading: true };
    case "user/error":
      toast.error(data.message);

      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}

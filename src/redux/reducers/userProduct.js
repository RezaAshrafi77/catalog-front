import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  list: [],
  info: null,
  sum: null,
  checkEmpty: false,
  hasPhysical: false,
  myList: [],
  transactions: null,
  count: null,
  excelData: [],
};

export default function userProduct(state = initialState, action) {
  let { type, data, schema, count, params } = action;
  switch (type) {
    case "userProduct/list":
      const checkEmpty = data.filter(
        (item) => item.condition === 2 && item.product.productType === (1 || 3)
      );
      const hasPhysical =
        data.filter((item) => item.product.productType === 2).length > 0
          ? true
          : false;
      return {
        ...state,
        loading: false,
        list: data,

        schema: schema,
        count,
        pageCount: +Math.floor((count - 1) / params.pageSize) + 1,
        checkEmpty: checkEmpty.length > 0 ? false : true,
        error: null,
        hasPhysical: hasPhysical,
      };
    case "userProduct/info":
      return { ...state, loading: false, info: data, error: null };
    case "userProduct/myList":
      return {
        ...state,
        loading: false,
        myList: data.userProducts,
        error: null,
        transactions: data.transactions,
        contribute: data.contribute,
      };
    case "user/clearExcelData": {
      return {
        ...state,
        loading: false,
        excelData: null,
      };
    }
    case "userProduct/update":
      return { ...state, loading: false, error: null };
    case "userProduct/delete":
      toast.success("محصول مورد نظر با موفقیت از دسترسی کاربر حذف شد");
      return { ...state, loading: false, error: null };
    case "userProduct/add":
      toast.success("درخواست شما با موفقیت انجام شد.");
      if (!localStorage.getItem("access")) {
        localStorage.setItem("access", data.accessToken);
        localStorage.setItem("refresh", data.refreshToken);
        localStorage.setItem("userData", JSON.stringify(data.profile));
        window.location.reload();
      }
      return {
        ...state,
        loading: false,
        error: null,
        sum: data.payPrice,
        count: data.count,
      };
    case "userProduct/addShow":
      toast.success("درخواست شما با موفقیت انجام شد.");
      return { ...state, loading: false, error: null, sum: data.payPrice };
    case "userProduct/delete":
      return { ...state, loading: false, error: null };
    case "userProduct/loading":
      return { ...state, loading: true };
    case "userProduct/error":
      // toast.error(data.message);
      // alert("why");
      // console.log(data);
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}

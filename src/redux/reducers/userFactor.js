import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  list: [],
  schema: [],
  count: 0,
  info: null,
  sum: null,
  checkEmpty: false,
  isVerified: null,
  orders: [],
  order: {},
  info: null,
  factorInfo: {
    seller: {
      name: null,
      economicCode: null,
      nationalId: null,
      city: null,
      province: null,
      postalCode: null,
      address: null,
      phone: null,
      description: null,
      prefix: 100,
    },
    buyer: {
      name: null,
      economicCode: null,
      nationalId: null,
      city: null,
      province: null,
      postalCode: null,
      address: null,
      phone: null,
    },
  },
};
export default function userFactor(state = initialState, action) {
  let { type, data, schema, count, params } = action;
  switch (type) {
    case "userFactor/list":
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
        list: data,
        count: count,
        schema: schema,
        pageCount: +Math.floor((count - 1) / params.pageSize) + 1,
        // checkEmpty: checkEmpty.length > 0 ? false : true,
        error: null,
      };
    case "user/clearExcelData": {
      return {
        ...state,
        loading: false,
        excelData: null,
      };
    }
    case "userFactor/info":
      return { ...state, loading: false, info: data, error: null };
    case "userFactor/admin/info":
      let Data = { ...state.factorInfo };
      Data.buyer = {
        name:
          data?.user?.firstName && data?.user?.lastName
            ? data?.user?.firstName + " " + data?.user?.lastName
            : null,
        economicCode: data?.user?.economicCode || null,
        nationalId: data?.user?.nationalId || null,
        phone: data?.user?.phone || null,
        city: data?.city?.name || null,
        province: data?.city?.province || null,
        postalCode: data?.recieverPostalCode || null,
        address: data?.recieverAddress || null,
      };
      Data.seller = {
        name: data?.products[0]?.seller?.name || Data?.seller?.name,
        fileId: data?.products[0]?.seller?.fileId || Data?.seller?.fileId,
        signatureFile:
          data?.products[0]?.seller?.signatureFile ||
          Data?.seller?.signatureFile,
        economicCode:
          data?.products[0]?.seller?.economicCode || Data?.seller?.economicCode,
        nationalId:
          data?.products[0]?.seller?.nationalId || Data?.seller?.nationalId,
        phone: data?.products[0]?.seller?.phone || Data?.seller?.phone,
        city: data?.products[0]?.seller?.city || Data?.seller?.city,
        province: data?.products[0]?.seller?.province || Data?.seller?.province,
        postalCode:
          data?.products[0]?.seller?.postalCode || Data?.seller?.postalCode,
        address: data?.products[0]?.seller?.address || Data?.seller?.address,
        description:
          data?.products[0]?.seller?.description || Data?.seller?.description,
        prefix: data?.products[0]?.seller?.prefix || Data?.seller?.prefix,
      };
      return {
        ...state,
        loading: false,
        factorInfo: { ...data, buyer: Data.buyer, seller: Data?.seller },
        error: null,
      };
    case "userFactor/orders":
      return {
        ...state,
        loading: false,
        orders: data,
        loading: false,
        list: data,
        count: count,
        schema: schema,
        pageCount: +Math.floor((count - 1) / params.pageSize) + 1,
        error: null,
      };
    case "userFactor/update":
      toast.success("درخواست شما با موفقیت انجام شد.");
      return { ...state, loading: false, error: null };
    case "deleteUserOffCode":
      return { ...state, loading: false, error: null };
    case "userFactor/add":
      toast.success("درخواست شما با موفقیت انجام شد.");
      return { ...state, loading: false, error: null, sum: data.payPrice };
    case "userFactor/delete":
      return { ...state, loading: false, error: null };
    case "userFactor/payment":
    case "userFactor/donate":
      if (!localStorage.getItem("access")) {
        localStorage.setItem("access", data.accessToken);
        localStorage.setItem("refresh", data.refreshToken);
        localStorage.setItem("userData", JSON.stringify(data.profile));
      }
      window.location.replace(data.url);
      return { ...state, loading: false, error: null, isVerified: false };
    case "userFactor/verify":
      return { ...state, loading: false, error: null, isVerified: true };
    case "userFactor/fullList":
      return {
        ...state,
        loading: false,
        orders: data,
        error: null,
      };
    case "userFactor/loading":
      return { ...state, loading: true };
    case "userFactor/error":
      // console.log("error");
      // toast.error(data.message);
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}

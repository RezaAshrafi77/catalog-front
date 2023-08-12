import { toast } from "react-toastify";
import config from "~/config";
const { baseUrl } = config;
const initialState = {
  userFactor: {
    beforeSchema: [
      {
        text: "نمایش",
        description: "نمایش",
        type: "button",
        link: "`factor?id=${row.id}`",
      },
    ],
  },
  file: {
    beforeSchema: [
      {
        text: "نمایش",
        description: "نمایش",
        link:
          "`${row.type=='folder'? 'file/?pid='+row.id: '" +
          baseUrl +
          "file/'+row.id}`",
        type: "button",
      },
    ],
  },
};

export default function admin(state = initialState, action) {
  let { type, data, schema, count, params, message } = action;

  if (!params && !params?._service) return state;

  const pathPrefix = `admin/${params._service}/`;
  switch (type.split(pathPrefix)[1]) {
    case "":
      if (params.excelData)
        return {
          ...state,
          [params._service]: {
            ...state[params._service],
            loading: false,
            error: null,
            schema: schema,
            excelData: data,
          },
        };
      return {
        ...state,
        [params._service]: {
          ...state[params._service],
          loading: false,
          error: null,
          list: data,
          schema: schema,
          count,
          pageCount: +Math.floor((count - 1) / params.pageSize) + 1,
        },
      };
    case "clearExcelData": {
      return {
        ...state,
        [params._service]: {
          ...state[params._service],
          loading: false,
          excelData: null,
        },
      };
    }
    case "/" + params.id:
      return {
        ...state,
        [params._service]: {
          ...state[params._service],
          loading: false,
          error: null,
          info: data,
        },
      };
    case "add":
      console.log(data);
      toast.success(message);
      return {
        ...state,
        [params._service]: {
          ...state[params._service],
          loading: false,
          error: null,
        },
      };
    case "update/" + params.id:
      toast.success(message);
      return {
        ...state,
        [params._service]: {
          ...state[params._service],
          loading: false,
          error: null,
        },
      };
    case "delete/" + params.id:
      toast.success(message);
      return {
        ...state,
        [params._service]: {
          ...state[params._service],
          loading: false,
          error: null,
        },
      };
    case "loading":
      return {
        ...state,
        [params._service]: {
          ...state[params._service],
          loading: true,
        },
      };
    case "error":
      toast.error(message);
      return {
        ...state,
        [params._service]: {
          ...state[params._service],
          loading: false,
          error: data.message,
        },
      };
    case "timeReport":
      return {
        ...state,
        [params._service]: {
          ...state[params._service],
          timeReport: data,
          error: null,
        },
      };
    default:
      return state;
  }
}

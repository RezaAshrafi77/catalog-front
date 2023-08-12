import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  id: null,
  signature: "",
  progress: 0,
  groupList: [],
  list: [
    {
      id: 1,
      name: "file a",
      type: "PNG",
      size: 50,
      uploadAt: "2022-09-10",
    },
    {
      id: 1,
      name: "file b",
      type: "JPG",
      size: 50,
      uploadAt: "2022-09-10",
    },
    {
      id: 1,
      name: "folder a",
      type: "folder",
      size: 50,
      uploadAt: "2022-09-10",
    },
  ],
  schema: [
    { name: "id", desc: "شناسه", description: "شناسه", type: "number" },
    { name: "name", desc: "نام", description: "نام", type: "string" },
    { name: "type", desc: "نوع", description: "شناسه", type: "string" },
    { name: "size", desc: "حجم", description: "شناسه", type: "number" },
    {
      name: "uploadAt",
      desc: "تاریخ آپلود",
      description: "شناسه",
      type: "date",
    },
  ],
};

export default function file(state = initialState, action) {
  let { type, data, params } = action;
  switch (type) {
    case "file/setSignature":
      return {
        ...state,
        signature: data,
      };
    case "file/upload":
      toast.success("فایل امضا با موفقیت بارگذاری و ثبت شد");
      return {
        ...state,
        loading: false,
        error: null,
        id: data.id,
      };
    case "message/send":
      return { ...state, id: null };
    case "file/group/list":
      return { ...state, groupList: data, loading: false, error: null };
    case "file/loading":
      return { ...state, loading: true, progress: 0 };
    case "file/progress":
      return { ...state, progress: data };
    case "file/error":
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}

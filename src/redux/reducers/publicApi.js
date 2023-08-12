import { toast } from "react-toastify";

const initialState = {
  loading: false,
  error: null,
  cellphone: null,
  loginMenu: [],
  sliderList: [],
  bookInfo: null,
  arList: [],
  bookSection: null,
  seasons: null,
  activeVOD: null,
  activeSeason: null,
  blogList: [],
  blog: null,
  blogHashtags: [],
  hashtag: "همه",
};
export default function publicApi(state = initialState, action) {
  const vodId = localStorage.getItem("vodId");
  let { type, data } = action;
  switch (type) {
    case "public/sendOTP":
      return {
        ...state,
        loading: false,
        cellphone: data.cellphone || null,
        error: null,
      };
    case "public/slider/list":
      return { ...state, sliderList: data };
    case "public/loginMenu":
      return { ...state, loading: false, loginMenu: data, error: null };
    case "/public/vod/activeVOD":
      return {
        ...state,
        loading: false,
        error: null,
        activeVOD: data,
      };
    case "public/vod/activeSeason":
      return {
        ...state,
        loading: false,
        activeSeason: state.activeSeason === data ? null : data,
        error: null,
      };
    case "public/vod/bookSection":
      const videoId = vodId;
      return {
        ...state,
        loading: false,
        bookSection: data,
        error: null,
        activeVOD: data.vods?.filter((item) => item.id !== videoId)[0],
      };
    case "public/vod/bookCourse":
      let allCats;
      allCats = Array.from(
        new Set(data.vods.map((item) => item.categoryId && item.categoryId))
      );
      return {
        ...state,
        loading: false,
        bookInfo: {
          ...data,
          vods: data.vods.map((item) => {
            return { ...item, active: false };
          }),
        },
        error: null,
        seasons: allCats.map((item) =>
          data.vods.filter((item1) => item1.categoryId === item)
        ),
        activeVOD: data.vods.filter((item) => item.id !== vodId)[0],
      };
    case "public/setHashtag":
      return {
        ...state,
        loading: false,
        hashtag: data,
        error: null,
      };
    case "public/blogList":
      return {
        ...state,
        loading: false,
        blogList: data,
        error: null,
        blogHashtags: ["همه", ...new Set(data.map((object) => object.tag))],
      };
    case "public/blogInfo":
      return { ...state, blog: data, loading: false, error: null };
    case "public/ar":
      return { ...state, loading: false, error: null, arList: data };
    case "public/loading":
      return { ...state, loading: true };
    case "public/error":
      toast.error(data.message);
      return { ...state, loading: false, error: data.message };
    default:
      return state;
  }
}

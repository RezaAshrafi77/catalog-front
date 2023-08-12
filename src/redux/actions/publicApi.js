import proxy from "~/redux/proxy";
const publicApi = {
  //blog start
  setHashtag: (data) => async (dispatch) =>
    await dispatch({ type: "public/setHashtag", data }),
  blogList:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("public/blogList", data, { dispatch }),
  blogInfo:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("public/blogInfo", data, { dispatch }),
  // blog end
  bookInfo:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.get("public/vod/bookCourse", data, { dispatch });
      await proxy.get("book/info", data2, { dispatch });
    },
  bookSection:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("public/vod/bookSection", data, { dispatch }),
  activeSeason: (data) => async (dispatch) =>
    await dispatch({ type: "public/vod/activeSeason", data }),
  activeVOD: (data) => async (dispatch) =>
    await dispatch({ type: "public/vod/activeVOD", data }),
  loginMenu:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("public/loginMenu", data, { dispatch }),
  sliderList: (data) => async (dispatch) =>
    await proxy.get("public/slider/list", data, { dispatch }),
  sendOtp:
    (data = {}) =>
    async (dispatch) =>
      await proxy.post("public/sendOTP", data, { dispatch }),
  clearOtp:
    (data = {}) =>
    async (dispatch) =>
      dispatch({ type: "public/sendOTP", data }),
  getArList: (data) => async (dispatch) =>
    await proxy.get("public/ar", data, { dispatch }),
};

export default publicApi;

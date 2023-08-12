import proxy from "~/redux/proxy";
const faq = {
  list:
    (data = {}) =>
    async (dispatch) =>
      await proxy.get("faq/list", data, { dispatch }),
  add:
    (data = {}) =>
    async (dispatch) =>
      await proxy.post("faq/add", data, { dispatch }),
  selectFaq:
    (data = {}) =>
    async (dispatch) =>
      await dispatch({ type: "faq/selectFaq", data: data }),
  searchFaq: (data) => async (dispatch) =>
    await dispatch({ type: "faq/search", data: data }),
};

export default faq;

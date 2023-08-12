import proxy from "~/redux/proxy";
const comment = {
  list:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("comment/list", data, { dispatch });
    },
  info:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("comment/info", data, { dispatch });
    },
  add:
    (data = {}) =>
    async (dispatch) => {
      await proxy.post("comment/add", data, { dispatch });
    },
  homePage:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("comment/homePage", data, { dispatch });
    },
  delete:
    (data = {}) =>
    async (dispatch) => {
      await proxy.delete("comment/delete", data, { dispatch });
    },
  update:
    (data = {}) =>
    async (dispatch) => {
      await proxy.put("comment/update", data, { dispatch });
    },
};

export default comment;

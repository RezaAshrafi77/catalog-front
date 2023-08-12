import proxy from "~/redux/proxy";
const user = {
  list:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("process/list", data, { dispatch });
    },
  info:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("process/info", data, { dispatch });
    },
  add:
    (data = {}) =>
    async (dispatch) => {
      await proxy.post("process/add", data, { dispatch });
    },
  copy:
    (data = {}) =>
    async (dispatch) => {
      await proxy.post("process/copy", data, { dispatch });
    },
  delete:
    (data = {}) =>
    async (dispatch) => {
      await proxy.delete("process/delete", data, { dispatch });
    },
  update:
    (data = {}) =>
    async (dispatch) => {
      await proxy.put("process/update", data, { dispatch });
    },
};

export default user;

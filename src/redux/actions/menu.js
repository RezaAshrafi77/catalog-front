import proxy from "~/redux/proxy";
const menu = {
  list:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("menu/list", data, { dispatch });
    },
  Adminlist:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("menu/admin/list", data, { dispatch });
    },
  info:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("menu/info", data, { dispatch });
    },
  add:
    (data = {}) =>
    async (dispatch) => {
      await proxy.post("menu/add", data, { dispatch });
    },
  homePage:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("menu/homePage", data, { dispatch });
    },
  delete:
    (data = {}) =>
    async (dispatch) => {
      console.log("deleteAction")
      await proxy.delete("menu/delete", data, { dispatch });
    },
  update:
    (data = {}) =>
    async (dispatch) => {
      await proxy.put("menu/update", data, { dispatch });
    },
};

export default menu;

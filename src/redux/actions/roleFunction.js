import proxy from "~/redux/proxy";
const menu = {
  list:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get(
        "admin/roleFunction",
        { ...data, schema: true },
        { dispatch }
      );
    },
  info:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("admin/roleFunction/" + data.id, data, { dispatch });
    },
  add:
    (data = {}) =>
    async (dispatch) => {
      await proxy.post("admin/roleFunction/add", data, { dispatch });
    },
  delete:
    (data = {}) =>
    async (dispatch) => {
      console.log(data);
      await proxy.delete("admin/roleFunction/delete/" + data.id, data, {
        dispatch,
      });
    },
  update:
    (data = {}) =>
    async (dispatch) => {
      await proxy.put("admin/roleFunction/update/" + data.id, data, {
        dispatch,
      });
    },
};

export default menu;
